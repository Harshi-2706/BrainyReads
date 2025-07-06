import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="nav">
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#667eea' }}>
            📚 BrainyReads
          </h1>
        </Link>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            style={isActive('/') ? { background: '#667eea', color: 'white' } : {}}
          >
            Home
          </Link>
          <Link 
            to="/mood-quiz" 
            className={`nav-link ${isActive('/mood-quiz') ? 'active' : ''}`}
            style={isActive('/mood-quiz') ? { background: '#667eea', color: 'white' } : {}}
          >
            Mood Quiz
          </Link>
          <Link 
            to="/recommendations" 
            className={`nav-link ${isActive('/recommendations') ? 'active' : ''}`}
            style={isActive('/recommendations') ? { background: '#667eea', color: 'white' } : {}}
          >
            Recommendations
          </Link>
          <Link 
            to="/dashboard" 
            className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
            style={isActive('/dashboard') ? { background: '#667eea', color: 'white' } : {}}
          >
            Dashboard
          </Link>
          <Link 
            to="/explore" 
            className={`nav-link ${isActive('/explore') ? 'active' : ''}`}
            style={isActive('/explore') ? { background: '#667eea', color: 'white' } : {}}
          >
            Explore
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 