import { NextResponse } from 'next/server';
import { AviationStackFlight } from '@/types/flight';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const flightNumber = searchParams.get('flightNumber');

  if (!flightNumber) {
    return NextResponse.json(
      { error: 'Flight number is required' },
      { status: 400 }
    );
  }

  const apiKey = process.env.AVIATIONSTACK_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here') {
    return NextResponse.json(
      { error: 'AviationStack API key is not configured' },
      { status: 500 }
    );
  }

  try {
    const query = flightNumber.toUpperCase().trim();
    // AviationStack free tier requires HTTP, not HTTPS
    const response = await fetch(`http://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${query}`);

    if (!response.ok) {
      throw new Error(`AviationStack API responded with status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message || 'Error fetching data from AviationStack');
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Failed to fetch flight data:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch flight data' },
      { status: 500 }
    );
  }
}
