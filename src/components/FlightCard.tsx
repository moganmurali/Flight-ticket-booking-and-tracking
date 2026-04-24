import React from 'react';
import { AviationStackFlight } from '@/types/flight';

interface FlightCardProps {
  flight: AviationStackFlight;
}

export default function FlightCard({ flight }: FlightCardProps) {
  // Format dates securely
  const formatTime = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '--:--';
    }
  };

  return (
    <div className="flight-card">
      <div className="flight-header">
        <span className="flight-number">{flight.flight.iata}</span>
        <span className="flight-status" style={{ textTransform: 'capitalize' }}>
          {flight.flight_status}
        </span>
      </div>
      
      <div className="flight-body">
        <div className="flight-point start">
          <span className="time">{formatTime(flight.departure.scheduled)}</span>
          <span className="location">{flight.departure.airport} ({flight.departure.iata})</span>
          <span className="timezone">Gate {flight.departure.gate || 'TBA'}</span>
        </div>
        
        <div className="flight-path">
          <div className="flight-path-line"></div>
          <div className="flight-path-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.0001L13 10.0001V3.50012C13 2.67012 12.33 2.00012 11.5 2.00012C10.67 2.00012 10 2.67012 10 3.50012V10.0001L1 16.0001V18.0001L10 15.0001V20.0001L7.5 22.0001V23.0001L11.5 21.5001L15.5 23.0001V22.0001L13 20.0001V15.0001L22 18.0001V16.0001Z" fill="currentColor"/>
            </svg>
          </div>
        </div>
        
        <div className="flight-point end">
          <span className="time">{formatTime(flight.arrival.scheduled)}</span>
          <span className="location">{flight.arrival.airport} ({flight.arrival.iata})</span>
          <span className="timezone">Gate {flight.arrival.gate || 'TBA'}</span>
        </div>
      </div>
    </div>
  );
}
