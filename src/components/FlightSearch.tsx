'use client';

import React, { useState } from 'react';
import FlightCard from './FlightCard';
import { AviationStackFlight } from '@/types/flight';

export default function FlightSearch() {
  const [flightNumber, setFlightNumber] = useState('');
  const [flights, setFlights] = useState<AviationStackFlight[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!flightNumber.trim()) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setFlights([]);

    try {
      const response = await fetch(`/api/flights?flightNumber=${encodeURIComponent(flightNumber)}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch flight data');
      }

      const data = await response.json();
      setFlights(data.data || []);
    } catch (err) {
      setError('An error occurred while fetching flight details.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="glass-container">
        <form onSubmit={handleSearch} className="search-form">
          <div className="input-wrapper">
            <input
              type="text"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              placeholder="Enter Flight Number (e.g., AA123)"
              className="search-input"
              aria-label="Flight Number"
            />
          </div>
          <button 
            type="submit" 
            className="search-button"
            disabled={isLoading || !flightNumber.trim()}
          >
            {isLoading ? <div className="spinner" /> : 'Search'}
          </button>
        </form>
      </div>

      <div className="results-container">
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}
        
        {!isLoading && !error && hasSearched && flights.length === 0 && (
          <div className="no-results">
            No flights found matching "{flightNumber}". Try AA123, DL456.
          </div>
        )}

        {flights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
      </div>
    </>
  );
}
