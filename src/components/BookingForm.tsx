'use client';

import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    from: '',
    to: '',
    budget: '',
    flightName: '',
    flightModel: '',
    company: ''
  });
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBook = () => {
    if (formData.from && formData.to && formData.name && selectedSeat) {
      const id = 'AT-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      setTicketId(id);
      setIsBooked(true);
    }
  };

  const SeatMap = () => {
    const rows = 5;
    const cols = ['A', 'B', 'C', 'X', 'D', 'E', 'F'];
    const occupied = ['1A', '2C', '3F', '4B', '5E'];

    return (
      <div className="seat-map-container">
        <div className="seat-map-header">
          <div className="auth-title">Select Your Seat</div>
          <div className="seat-legend">
            <div className="legend-item"><span className="seat-dot" style={{ background: 'rgba(255, 255, 255, 0.05)' }}></span> Available</div>
            <div className="legend-item"><span className="seat-dot" style={{ background: 'rgba(255, 255, 255, 0.02)' }}></span> Filled</div>
            <div className="legend-item"><span className="seat-dot" style={{ background: 'var(--accent)' }}></span> Selected</div>
          </div>
        </div>
        <div className="seat-grid">
          {Array.from({ length: rows }).map((_, r) => (
            <React.Fragment key={r}>
              {cols.map((c) => {
                const id = `${r + 1}${c}`;
                if (c === 'X') return <div key={id} className="seat aisle"></div>;
                const isOccupied = occupied.includes(id);
                const isSelected = selectedSeat === id;
                return (
                  <div 
                    key={id} 
                    className={`seat ${isOccupied ? 'filled' : isSelected ? 'selected' : 'available'}`}
                    onClick={() => !isOccupied && setSelectedSeat(id)}
                  >
                    {id}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  if (isBooked) {
    return (
      <div className="ticket-container">
        <div className="ticket-main">
          <div className="ticket-header">
            <span className="ticket-brand">AERO TRACK BOARDING PASS</span>
            <div className="ticket-id-badge">{ticketId}</div>
          </div>

          <div className="ticket-route">
            <div className="route-point">
              <span className="route-code">{formData.from.substring(0, 3).toUpperCase()}</span>
              <span className="route-city">{formData.from || 'ORIGIN'}</span>
            </div>
            <div style={{ flex: 1, borderBottom: '2px dashed #cbd5e1', margin: '0 1rem', position: 'relative' }}>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="#3b82f6" 
                style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(90deg)' }}
              >
                <path d="M22 16.0001L13 10.0001V3.50012C13 2.67012 12.33 2.00012 11.5 2.00012C10.67 2.00012 10 2.67012 10 3.50012V10.0001L1 16.0001V18.0001L10 15.0001V20.0001L7.5 22.0001V23.0001L11.5 21.5001L15.5 23.0001V22.0001L13 20.0001V15.0001L22 18.0001V16.0001Z" />
              </svg>
            </div>
            <div className="route-point" style={{ textAlign: 'right' }}>
              <span className="route-code">{formData.to.substring(0, 3).toUpperCase()}</span>
              <span className="route-city">{formData.to || 'DESTINATION'}</span>
            </div>
          </div>

          <div className="ticket-info-grid">
            <div className="info-item">
              <span className="info-label">Passenger</span>
              <span className="info-value">{formData.name} ({formData.age} yrs)</span>
            </div>
            <div className="info-item">
              <span className="info-label">Flight</span>
              <span className="info-value">{formData.flightName || 'AT-2024'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Date</span>
              <span className="info-value">25 APR 2026</span>
            </div>
            <div className="info-item">
              <span className="info-label">Gate</span>
              <span className="info-value">B-12</span>
            </div>
            <div className="info-item">
              <span className="info-label">Seat</span>
              <span className="info-value" style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>{selectedSeat}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Boarding</span>
              <span className="info-value">08:45 AM</span>
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', fontSize: '0.75rem', color: '#64748b', textAlign: 'center' }}>
            SCAN FOR SECURITY VERIFICATION • SYSTEM AUTHENTICATED
          </div>
        </div>

        <div className="ticket-stub">
          <div className="stub-info">
            <div className="info-item">
              <span className="info-label">Passenger</span>
              <span className="info-value" style={{ fontSize: '0.875rem' }}>{formData.name.split(' ')[0]}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Flight</span>
              <span className="info-value">{formData.flightName || 'AT-2024'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Seat</span>
              <span className="info-value">{selectedSeat}</span>
            </div>
          </div>
          <div className="qr-mock">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="qr-dot" style={{ opacity: Math.random() > 0.3 ? 1 : 0 }} />
            ))}
          </div>
          <button 
            onClick={() => { setIsBooked(false); setSelectedSeat(null); }} 
            style={{ 
              marginTop: '2rem', 
              background: 'none', 
              border: '1px solid #cbd5e1', 
              padding: '0.5rem', 
              borderRadius: '8px', 
              fontSize: '0.75rem',
              cursor: 'pointer'
            }}
          >
            New Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-container" style={{ marginTop: '4rem', maxWidth: '850px', padding: '0', overflow: 'hidden' }}>
      <div style={{ padding: '2.5rem', borderBottom: '1px solid var(--border-color)' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '0.5rem', letterSpacing: '-1px' }}>
          Custom Flight Booking
        </h2>
        <p style={{ color: 'var(--text-secondary)' }}>Tailor your journey with Aero Track's premium booking engine.</p>
      </div>
      
      <form className="booking-form-grid" onSubmit={(e) => e.preventDefault()}>
        {/* Row 0: Passenger Info */}
        <div className="booking-field">
          <label className="booking-label">Passenger Name</label>
          <input 
            name="name" 
            placeholder="Full Name" 
            className="booking-input" 
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="booking-field">
          <label className="booking-label">Passenger Age</label>
          <input 
            name="age" 
            placeholder="Age" 
            className="booking-input" 
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        {/* Row 1: Locations */}
        <div className="booking-field">
          <label className="booking-label">From Location</label>
          <input 
            name="from" 
            placeholder="City or Airport" 
            className="booking-input" 
            value={formData.from}
            onChange={handleChange}
          />
        </div>
        <div className="booking-field">
          <label className="booking-label">To Location</label>
          <input 
            name="to" 
            placeholder="Destination" 
            className="booking-input" 
            value={formData.to}
            onChange={handleChange}
          />
        </div>

        {/* Row 2: Budget & Flight Name */}
        <div className="booking-field">
          <label className="booking-label">Budget Range</label>
          <input 
            name="budget" 
            placeholder="e.g. $500 - $1000" 
            className="booking-input" 
            value={formData.budget}
            onChange={handleChange}
          />
        </div>
        <div className="booking-field">
          <label className="booking-label">Flight Name</label>
          <input 
            name="flightName" 
            placeholder="e.g. Sky Express" 
            className="booking-input" 
            value={formData.flightName}
            onChange={handleChange}
          />
        </div>

        {/* Row 3: Model & Company */}
        <div className="booking-field">
          <label className="booking-label">Flight Model</label>
          <input 
            name="flightModel" 
            placeholder="e.g. Airbus A350" 
            className="booking-input" 
            value={formData.flightModel}
            onChange={handleChange}
          />
        </div>
        <div className="booking-field">
          <label className="booking-label">Flight Company Name</label>
          <input 
            name="company" 
            placeholder="e.g. Emirates" 
            className="booking-input" 
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <SeatMap />

        {/* Payment Section */}
        <div className="payment-options">
          <div className="auth-title" style={{ textAlign: 'center' }}>Connect Payment Option</div>
          <div className="payment-buttons">
            <button type="button" className="pay-btn gpay">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11.29 17.29L6.71 12.71C6.32 12.32 6.32 11.68 6.71 11.29C7.1 10.9 7.74 10.9 8.12 11.29L12 15.17L15.88 11.29C16.27 10.9 16.91 10.9 17.29 11.29C17.68 11.68 17.68 12.32 17.29 12.71L12.71 17.29C12.32 17.68 11.68 17.68 11.29 17.29Z" fill="#EA4335"/>
              </svg>
              Google Pay
            </button>
            <button type="button" className="pay-btn card">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
              </svg>
              Credit/Debit Card
            </button>
          </div>
          
          <button 
            type="button" 
            className="auth-button" 
            style={{ 
              marginTop: '1rem', 
              height: '3.5rem', 
              fontSize: '1.25rem',
              opacity: (formData.name && selectedSeat) ? 1 : 0.5,
              cursor: (formData.name && selectedSeat) ? 'pointer' : 'not-allowed'
            }}
            onClick={handleBook}
            disabled={!formData.name || !selectedSeat}
          >
            {(formData.name && selectedSeat) ? 'BOOK NOW' : 'Select Seat to Continue'}
          </button>
        </div>
      </form>
      
      <div style={{ padding: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-secondary)', background: 'rgba(0,0,0,0.1)' }}>
        <p>Your data is processed securely through Aero Track's encrypted infrastructure.</p>
      </div>
    </div>
  );
};

export default BookingForm;
