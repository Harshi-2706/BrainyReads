import React, { useState } from 'react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock data for dashboard
  const userStats = {
    totalBooks: 47,
    booksThisMonth: 3,
    averageRating: 4.2,
    favoriteGenres: ['Fiction', 'Self-Help', 'Science Fiction'],
    readingGoal: 24,
    booksRead: 18
  }

  const savedBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.1,
      genre: "Fiction",
      savedDate: "2024-01-15"
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      rating: 4.6,
      genre: "Self-Help",
      savedDate: "2024-01-10"
    },
    {
      id: 3,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      rating: 4.5,
      genre: "History",
      savedDate: "2024-01-05"
    }
  ]

  const readingHistory = [
    {
      id: 1,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      rating: 4.3,
      completedDate: "2024-01-20",
      mood: "calm"
    },
    {
      id: 2,
      title: "Big Magic",
      author: "Elizabeth Gilbert",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      rating: 4.5,
      completedDate: "2024-01-15",
      mood: "excited"
    },
    {
      id: 3,
      title: "The Untethered Soul",
      author: "Michael A. Singer",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.3,
      completedDate: "2024-01-10",
      mood: "stressed"
    }
  ]

  const moodStats = {
    happy: 8,
    calm: 12,
    excited: 6,
    curious: 9,
    stressed: 5,
    nostalgic: 4,
    sad: 2,
    adventurous: 3
  }

  const renderOverview = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
      <div className="card">
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📚</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2d3748' }}>
          Total Books Read
        </h3>
        <p style={{ fontSize: '2rem', fontWeight: '700', color: '#667eea' }}>{userStats.totalBooks}</p>
      </div>

      <div className="card">
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📖</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2d3748' }}>
          This Month
        </h3>
        <p style={{ fontSize: '2rem', fontWeight: '700', color: '#667eea' }}>{userStats.booksThisMonth}</p>
      </div>

      <div className="card">
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⭐</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2d3748' }}>
          Average Rating
        </h3>
        <p style={{ fontSize: '2rem', fontWeight: '700', color: '#667eea' }}>{userStats.averageRating}</p>
      </div>

      <div className="card">
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2d3748' }}>
          Reading Goal
        </h3>
        <p style={{ fontSize: '2rem', fontWeight: '700', color: '#667eea' }}>
          {userStats.booksRead}/{userStats.readingGoal}
        </p>
        <div style={{ 
          width: '100%', 
          height: '8px', 
          background: '#e2e8f0', 
          borderRadius: '4px', 
          marginTop: '0.5rem',
          overflow: 'hidden'
        }}>
          <div style={{ 
            width: `${(userStats.booksRead / userStats.readingGoal) * 100}%`, 
            height: '100%', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '4px'
          }}></div>
        </div>
      </div>
    </div>
  )

  const renderFavoriteGenres = () => (
    <div className="card" style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#2d3748' }}>
        Your Favorite Genres
      </h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {userStats.favoriteGenres.map((genre, index) => (
          <span 
            key={index}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}
          >
            {genre}
          </span>
        ))}
      </div>
    </div>
  )

  const renderMoodStats = () => (
    <div className="card" style={{ marginBottom: '2rem' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#2d3748' }}>
        Reading by Mood
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
        {Object.entries(moodStats).map(([mood, count]) => (
          <div key={mood} style={{ textAlign: 'center', padding: '1rem', background: '#f7fafc', borderRadius: '0.5rem' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              {mood === 'happy' ? '😊' : 
               mood === 'sad' ? '😢' : 
               mood === 'excited' ? '🤩' : 
               mood === 'calm' ? '😌' : 
               mood === 'curious' ? '🤔' : 
               mood === 'stressed' ? '😰' : 
               mood === 'nostalgic' ? '🥺' : 
               mood === 'adventurous' ? '🏃‍♂️' : '📚'}
            </div>
            <div style={{ fontWeight: '600', color: '#2d3748', textTransform: 'capitalize' }}>{mood}</div>
            <div style={{ color: '#667eea', fontWeight: '600' }}>{count} books</div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderSavedBooks = () => (
    <div className="card">
      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#2d3748' }}>
        Saved Books ({savedBooks.length})
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {savedBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img 
              src={book.cover} 
              alt={book.title}
              className="book-cover"
            />
            <div style={{ padding: '1rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem', color: '#2d3748' }}>
                {book.title}
              </h4>
              <p style={{ color: '#4a5568', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                by {book.author}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#667eea', fontSize: '0.75rem' }}>{book.genre}</span>
                <span style={{ color: '#f6ad55', fontSize: '0.875rem' }}>⭐ {book.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderReadingHistory = () => (
    <div className="card">
      <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#2d3748' }}>
        Recent Reading History
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
        {readingHistory.map((book) => (
          <div key={book.id} className="book-card">
            <img 
              src={book.cover} 
              alt={book.title}
              className="book-cover"
            />
            <div style={{ padding: '1rem' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem', color: '#2d3748' }}>
                {book.title}
              </h4>
              <p style={{ color: '#4a5568', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                by {book.author}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ color: '#667eea', fontSize: '0.75rem' }}>Completed</span>
                <span style={{ color: '#f6ad55', fontSize: '0.875rem' }}>⭐ {book.rating}</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#718096' }}>
                {new Date(book.completedDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: 'white' }}>
          📊 Your Reading Dashboard
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.9)' }}>
          Track your reading journey and discover your preferences
        </p>
      </div>

      {/* Tab Navigation */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button 
          className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('overview')}
        >
          📊 Overview
        </button>
        <button 
          className={`btn ${activeTab === 'saved' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('saved')}
        >
          ❤️ Saved Books
        </button>
        <button 
          className={`btn ${activeTab === 'history' ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setActiveTab('history')}
        >
          📚 Reading History
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <>
          {renderOverview()}
          {renderFavoriteGenres()}
          {renderMoodStats()}
        </>
      )}

      {activeTab === 'saved' && renderSavedBooks()}
      {activeTab === 'history' && renderReadingHistory()}
    </div>
  )
}

export default Dashboard 