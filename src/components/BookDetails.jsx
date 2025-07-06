import React from 'react'

const BookDetails = ({ book, onClose, onSave }) => {
  if (!book) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '2rem'
    }}>
      <div className="card" style={{ maxWidth: '500px', maxHeight: '80vh', overflow: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748' }}>Book Details</h2>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#4a5568' }}
          >
            ×
          </button>
        </div>
        
        <img 
          src={book.cover} 
          alt={book.title}
          style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1rem' }}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop'
          }}
        />
        
        <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2d3748' }}>
          {book.title}
        </h3>
        <p style={{ color: '#4a5568', marginBottom: '1rem' }}>by {book.author}</p>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ color: '#667eea', fontWeight: '500' }}>{book.genre}</span>
          <span style={{ color: '#f6ad55', fontWeight: '600' }}>⭐ {book.rating}</span>
        </div>
        
        <p style={{ color: '#718096', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          {book.description}
        </p>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-primary">📖 Read Sample</button>
          <button className="btn btn-secondary" onClick={onSave}>❤️ Save to List</button>
        </div>
      </div>
    </div>
  )
}

export default BookDetails 