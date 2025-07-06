import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Recommendations = () => {
  const location = useLocation()
  const [recommendations, setRecommendations] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedBook, setSelectedBook] = useState(null)

  // Mock book data based on different moods
  const mockBooks = {
    happy: [
      {
        id: 1,
        title: "The Happiness Project",
        author: "Gretchen Rubin",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
        rating: 4.2,
        genre: "Self-Help",
        description: "A year-long experiment in happiness and personal growth."
      },
      {
        id: 2,
        title: "Big Magic",
        author: "Elizabeth Gilbert",
        cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
        rating: 4.5,
        genre: "Creativity",
        description: "Creative living beyond fear and embracing your creative spirit."
      },
      {
        id: 3,
        title: "The Alchemist",
        author: "Paulo Coelho",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
        rating: 4.3,
        genre: "Fiction",
        description: "A magical story about following your dreams and listening to your heart."
      }
    ],
    sad: [
      {
        id: 4,
        title: "The Midnight Library",
        author: "Matt Haig",
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
        rating: 4.1,
        genre: "Fiction",
        description: "Between life and death there is a library, and within that library, the shelves go on forever."
      },
      {
        id: 5,
        title: "Reasons to Stay Alive",
        author: "Matt Haig",
        cover: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=400&fit=crop",
        rating: 4.4,
        genre: "Memoir",
        description: "A memoir about depression and finding reasons to live."
      }
    ],
    excited: [
      {
        id: 6,
        title: "Atomic Habits",
        author: "James Clear",
        cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
        rating: 4.6,
        genre: "Self-Help",
        description: "Tiny changes, remarkable results - how to build good habits and break bad ones."
      },
      {
        id: 7,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
        rating: 4.3,
        genre: "Spirituality",
        description: "A guide to spiritual enlightenment and living in the present moment."
      }
    ],
    calm: [
      {
        id: 8,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
        rating: 4.7,
        genre: "Fiction",
        description: "A timeless tale about love, loss, and the meaning of life."
      },
      {
        id: 9,
        title: "The Tao of Pooh",
        author: "Benjamin Hoff",
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
        rating: 4.2,
        genre: "Philosophy",
        description: "Winnie-the-Pooh's way of life as a guide to Taoist philosophy."
      }
    ],
    curious: [
      {
        id: 10,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
        rating: 4.5,
        genre: "History",
        description: "A brief history of humankind and how we became the dominant species."
      },
      {
        id: 11,
        title: "The Gene",
        author: "Siddhartha Mukherjee",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
        rating: 4.4,
        genre: "Science",
        description: "An intimate history of the gene and the future of humanity."
      }
    ],
    stressed: [
      {
        id: 12,
        title: "The Untethered Soul",
        author: "Michael A. Singer",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
        rating: 4.3,
        genre: "Spirituality",
        description: "The journey beyond yourself and finding inner peace."
      },
      {
        id: 13,
        title: "Mindfulness in Plain English",
        author: "Henepola Gunaratana",
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
        rating: 4.1,
        genre: "Meditation",
        description: "A practical guide to mindfulness meditation."
      }
    ],
    nostalgic: [
      {
        id: 14,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
        rating: 4.2,
        genre: "Classic Fiction",
        description: "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan."
      },
      {
        id: 15,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
        rating: 4.6,
        genre: "Classic Fiction",
        description: "A story of racial injustice and the loss of innocence in the American South."
      }
    ],
    adventurous: [
      {
        id: 16,
        title: "Into the Wild",
        author: "Jon Krakauer",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
        rating: 4.4,
        genre: "Adventure",
        description: "The true story of Christopher McCandless and his journey into the Alaskan wilderness."
      },
      {
        id: 17,
        title: "Wild",
        author: "Cheryl Strayed",
        cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
        rating: 4.3,
        genre: "Memoir",
        description: "A 1,100-mile solo hike along the Pacific Crest Trail."
      }
    ]
  }

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      const mood = location.state?.selectedMood || 'happy'
      const books = mockBooks[mood] || mockBooks.happy
      setRecommendations(books)
      setLoading(false)
    }, 1500)
  }, [location.state])

  const handleBookClick = (book) => {
    setSelectedBook(book)
  }

  const closeModal = () => {
    setSelectedBook(null)
  }

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

  if (loading) {
    return (
      <div className="container" style={{ paddingTop: '4rem', textAlign: 'center' }}>
        <div className="loading" style={{ width: '40px', height: '40px', margin: '0 auto 1rem' }}></div>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Finding Perfect Books for You...</h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          Our AI is analyzing your mood and preferences
        </p>
      </div>
    )
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: 'white' }}>
          {getMoodEmoji(location.state?.selectedMood)} Your Personalized Recommendations
        </h1>
        <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.9)' }}>
          Based on your mood: <strong>{location.state?.selectedMood || 'happy'}</strong>
        </p>
      </div>

      {/* Recommendations Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {recommendations.map((book) => (
          <div key={book.id} className="book-card" onClick={() => handleBookClick(book)}>
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
              <p style={{ color: '#718096', fontSize: '0.875rem', lineHeight: '1.5' }}>
                {book.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Section */}
      <div className="card" style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2d3748' }}>
          How did we do?
        </h3>
        <p style={{ color: '#4a5568', marginBottom: '2rem' }}>
          Rate these recommendations to help us improve future suggestions
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary">👍 Loved These!</button>
          <button className="btn btn-secondary">👎 Not Quite Right</button>
          <button className="btn btn-secondary">🔄 Try Different Mood</button>
        </div>
      </div>

      {/* Book Details Modal */}
      {selectedBook && (
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
                onClick={closeModal}
                style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#4a5568' }}
              >
                ×
              </button>
            </div>
            
            <img 
              src={selectedBook.cover} 
              alt={selectedBook.title}
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1rem' }}
            />
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2d3748' }}>
              {selectedBook.title}
            </h3>
            <p style={{ color: '#4a5568', marginBottom: '1rem' }}>by {selectedBook.author}</p>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ color: '#667eea', fontWeight: '500' }}>{selectedBook.genre}</span>
              <span style={{ color: '#f6ad55', fontWeight: '600' }}>⭐ {selectedBook.rating}</span>
            </div>
            
            <p style={{ color: '#718096', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {selectedBook.description}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn btn-primary">📖 Read Sample</button>
              <button className="btn btn-secondary">❤️ Save to List</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Recommendations 