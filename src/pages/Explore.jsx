import React, { useState } from 'react'

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [selectedMood, setSelectedMood] = useState('all')
  const [sortBy, setSortBy] = useState('popularity')

  // Mock book data for exploration
  const allBooks = [
    {
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.1,
      genre: "Fiction",
      mood: "sad",
      popularity: 95,
      year: 2020
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      rating: 4.6,
      genre: "Self-Help",
      mood: "excited",
      popularity: 98,
      year: 2018
    },
    {
      id: 3,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      rating: 4.5,
      genre: "History",
      mood: "curious",
      popularity: 92,
      year: 2011
    },
    {
      id: 4,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      rating: 4.3,
      genre: "Spirituality",
      mood: "calm",
      popularity: 88,
      year: 1997
    },
    {
      id: 5,
      title: "Big Magic",
      author: "Elizabeth Gilbert",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      rating: 4.5,
      genre: "Creativity",
      mood: "excited",
      popularity: 85,
      year: 2015
    },
    {
      id: 6,
      title: "The Untethered Soul",
      author: "Michael A. Singer",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.3,
      genre: "Spirituality",
      mood: "stressed",
      popularity: 82,
      year: 2007
    },
    {
      id: 7,
      title: "The Little Prince",
      author: "Antoine de Saint-Exupéry",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      rating: 4.7,
      genre: "Fiction",
      mood: "calm",
      popularity: 90,
      year: 1943
    },
    {
      id: 8,
      title: "The Tao of Pooh",
      author: "Benjamin Hoff",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.2,
      genre: "Philosophy",
      mood: "calm",
      popularity: 78,
      year: 1982
    },
    {
      id: 9,
      title: "The Gene",
      author: "Siddhartha Mukherjee",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      rating: 4.4,
      genre: "Science",
      mood: "curious",
      popularity: 80,
      year: 2016
    },
    {
      id: 10,
      title: "Mindfulness in Plain English",
      author: "Henepola Gunaratana",
      cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      rating: 4.1,
      genre: "Meditation",
      mood: "stressed",
      popularity: 75,
      year: 1991
    },
    {
      id: 11,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      rating: 4.2,
      genre: "Classic Fiction",
      mood: "nostalgic",
      popularity: 87,
      year: 1925
    },
    {
      id: 12,
      title: "Into the Wild",
      author: "Jon Krakauer",
      cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      rating: 4.4,
      genre: "Adventure",
      mood: "adventurous",
      popularity: 83,
      year: 1996
    }
  ]

  const genres = ['all', 'Fiction', 'Self-Help', 'History', 'Spirituality', 'Creativity', 'Science', 'Meditation', 'Classic Fiction', 'Adventure', 'Philosophy']
  const moods = ['all', 'happy', 'sad', 'excited', 'calm', 'curious', 'stressed', 'nostalgic', 'adventurous']

  // Filter and sort books
  const filteredBooks = allBooks.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === 'all' || book.genre === selectedGenre
    const matchesMood = selectedMood === 'all' || book.mood === selectedMood
    
    return matchesSearch && matchesGenre && matchesMood
  }).sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.popularity - a.popularity
      case 'rating':
        return b.rating - a.rating
      case 'year':
        return b.year - a.year
      case 'title':
        return a.title.localeCompare(b.title)
      default:
        return 0
    }
  })

  const getMoodEmoji = (mood) => {
    const moodEmojis = {
      happy: '😊',
      sad: '😢',
      excited: '🤩',
      calm: '😌',
      curious: '🤔',
      stressed: '😰',
      nostalgic: '🥺',
      adventurous: '🏃‍♂️'
    }
    return moodEmojis[mood] || '📚'
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: 'white' }}>
          🔍 Explore Books
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.9)' }}>
          Discover amazing books by genre, mood, or search for your next favorite read
        </p>
      </div>

      {/* Search and Filters */}
      <div className="card" style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {/* Search */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
              Search Books
            </label>
            <input
              type="text"
              className="input"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Genre Filter */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
              Genre
            </label>
            <select
              className="input"
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === 'all' ? 'All Genres' : genre}
                </option>
              ))}
            </select>
          </div>

          {/* Mood Filter */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
              Mood
            </label>
            <select
              className="input"
              value={selectedMood}
              onChange={(e) => setSelectedMood(e.target.value)}
            >
              {moods.map(mood => (
                <option key={mood} value={mood}>
                  {mood === 'all' ? 'All Moods' : `${getMoodEmoji(mood)} ${mood.charAt(0).toUpperCase() + mood.slice(1)}`}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
              Sort By
            </label>
            <select
              className="input"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
              <option value="year">Year</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: '#4a5568', fontWeight: '500' }}>
            Found {filteredBooks.length} books
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                setSearchTerm('')
                setSelectedGenre('all')
                setSelectedMood('all')
                setSortBy('popularity')
              }}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      {filteredBooks.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
          {filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <img 
                src={book.cover} 
                alt={book.title}
                className="book-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop'
                }}
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2d3748' }}>
                  {book.title}
                </h3>
                <p style={{ color: '#4a5568', marginBottom: '0.5rem' }}>by {book.author}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ color: '#667eea', fontWeight: '500' }}>{book.genre}</span>
                  <span style={{ color: '#f6ad55', fontWeight: '600' }}>⭐ {book.rating}</span>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ color: '#718096', fontSize: '0.875rem' }}>
                    {getMoodEmoji(book.mood)} {book.mood}
                  </span>
                  <span style={{ color: '#718096', fontSize: '0.875rem' }}>
                    {book.year}
                  </span>
                </div>
                
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary" style={{ flex: 1, fontSize: '0.875rem', padding: '0.5rem' }}>
                    📖 Read Sample
                  </button>
                  <button className="btn btn-secondary" style={{ flex: 1, fontSize: '0.875rem', padding: '0.5rem' }}>
                    ❤️ Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2d3748' }}>
            No books found
          </h3>
          <p style={{ color: '#4a5568', marginBottom: '2rem' }}>
            Try adjusting your search terms or filters
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              setSearchTerm('')
              setSelectedGenre('all')
              setSelectedMood('all')
              setSortBy('popularity')
            }}
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default Explore 