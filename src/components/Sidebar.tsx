'use client';

import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Section 1: Branding */}
      <div className="sidebar-section sidebar-top">
        <div className="logo-container">
          <div className="logo-text">AERO TRACK</div>
        </div>
        <nav>
          <div className="nav-item active">
            <span>Dashboard</span>
          </div>
          <div className="nav-item">
            <span>Live Map</span>
          </div>
          <div className="nav-item">
            <span>Schedules</span>
          </div>
        </nav>
      </div>

      {/* Section 2: Tasks/Secondary Nav */}
      <div className="sidebar-section sidebar-middle">
        <div className="auth-title">Quick Tasks</div>
        <nav>
          <div className="nav-item">
            <span>Bookings</span>
          </div>
          <div className="nav-item" onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}>
            <span>Book a Flight</span>
          </div>
          <div className="nav-item">
            <span>History</span>
          </div>
        </nav>
      </div>

      {/* Dataset Info Badge */}
      <div style={{ padding: '0 1.5rem', marginBottom: '1rem' }}>
        <div style={{ 
          background: 'rgba(59, 130, 246, 0.1)', 
          border: '1px solid rgba(59, 130, 246, 0.2)', 
          borderRadius: '8px', 
          padding: '0.5rem',
          fontSize: '0.75rem',
          color: 'var(--accent)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span style={{ width: '8px', height: '8px', background: '#10b981', borderRadius: '50%' }}></span>
          Live Dataset: AviationStack
        </div>
      </div>

      {/* Section 3: User Authentication */}
      <div className="sidebar-section sidebar-bottom">
        <div className="auth-title">User Account</div>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="User ID" 
              className="auth-input"
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              className="auth-input"
            />
          </div>
          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '1rem 0' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>OR</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border-color)' }}></div>
        </div>

        <button className="github-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Continue with GitHub
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
