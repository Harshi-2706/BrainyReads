const express = require('express')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Database setup
const db = new sqlite3.Database('./brainyreads.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message)
  } else {
    console.log('Connected to SQLite database')
    initDatabase()
  }
})

// Initialize database tables
function initDatabase() {
  db.serialize(() => {
    // Users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`)

    // Books table
    db.run(`CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      author TEXT NOT NULL,
      genre TEXT,
      mood TEXT,
      rating REAL,
      description TEXT,
      cover_url TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`)

    // User preferences table
    db.run(`CREATE TABLE IF NOT EXISTS user_preferences (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      favorite_genres TEXT,
      preferred_moods TEXT,
      reading_goal INTEGER DEFAULT 12,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id)
    )`)

    // Saved books table
    db.run(`CREATE TABLE IF NOT EXISTS saved_books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      book_id INTEGER,
      saved_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id),
      FOREIGN KEY (book_id) REFERENCES books (id)
    )`)

    // Reading history table
    db.run(`CREATE TABLE IF NOT EXISTS reading_history (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      book_id INTEGER,
      mood TEXT,
      rating INTEGER,
      completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id),
      FOREIGN KEY (book_id) REFERENCES books (id)
    )`)

    console.log('Database tables initialized')
  })
}

// Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'BrainyReads API is running' })
})

// Get all books
app.get('/api/books', (req, res) => {
  const { genre, mood, search, sort } = req.query
  
  let query = 'SELECT * FROM books WHERE 1=1'
  const params = []
  
  if (genre && genre !== 'all') {
    query += ' AND genre = ?'
    params.push(genre)
  }
  
  if (mood && mood !== 'all') {
    query += ' AND mood = ?'
    params.push(mood)
  }
  
  if (search) {
    query += ' AND (title LIKE ? OR author LIKE ?)'
    const searchTerm = `%${search}%`
    params.push(searchTerm, searchTerm)
  }
  
  if (sort) {
    switch (sort) {
      case 'rating':
        query += ' ORDER BY rating DESC'
        break
      case 'title':
        query += ' ORDER BY title ASC'
        break
      default:
        query += ' ORDER BY id DESC'
    }
  } else {
    query += ' ORDER BY id DESC'
  }
  
  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message })
      return
    }
    res.json(rows)
  })
})

// Get book recommendations based on mood
app.post('/api/recommendations', (req, res) => {
  const { mood, textInput } = req.body
  
  // Simple recommendation logic (will be enhanced with ML later)
  let query = 'SELECT * FROM books WHERE 1=1'
  const params = []
  
  if (mood && mood !== 'text-input') {
    query += ' AND mood = ?'
    params.push(mood)
  }
  
  query += ' ORDER BY rating DESC LIMIT 10'
  
  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message })
      return
    }
    
    // Simulate processing delay
    setTimeout(() => {
      res.json({
        recommendations: rows,
        mood: mood,
        textInput: textInput
      })
    }, 1000)
  })
})

// Save a book to user's list
app.post('/api/saved-books', (req, res) => {
  const { user_id, book_id } = req.body
  
  db.run(
    'INSERT INTO saved_books (user_id, book_id) VALUES (?, ?)',
    [user_id, book_id],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message })
        return
      }
      res.json({ 
        message: 'Book saved successfully',
        id: this.lastID 
      })
    }
  )
})

// Get user's saved books
app.get('/api/saved-books/:userId', (req, res) => {
  const { userId } = req.params
  
  db.all(
    `SELECT b.* FROM books b
     INNER JOIN saved_books sb ON b.id = sb.book_id
     WHERE sb.user_id = ?
     ORDER BY sb.saved_at DESC`,
    [userId],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message })
        return
      }
      res.json(rows)
    }
  )
})

// Add reading history
app.post('/api/reading-history', (req, res) => {
  const { user_id, book_id, mood, rating } = req.body
  
  db.run(
    'INSERT INTO reading_history (user_id, book_id, mood, rating) VALUES (?, ?, ?, ?)',
    [user_id, book_id, mood, rating],
    function(err) {
      if (err) {
        res.status(500).json({ error: err.message })
        return
      }
      res.json({ 
        message: 'Reading history added successfully',
        id: this.lastID 
      })
    }
  )
})

// Get user's reading history
app.get('/api/reading-history/:userId', (req, res) => {
  const { userId } = req.params
  
  db.all(
    `SELECT b.*, rh.mood, rh.rating, rh.completed_at FROM books b
     INNER JOIN reading_history rh ON b.id = rh.book_id
     WHERE rh.user_id = ?
     ORDER BY rh.completed_at DESC`,
    [userId],
    (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message })
        return
      }
      res.json(rows)
    }
  )
})

// Get user statistics
app.get('/api/user-stats/:userId', (req, res) => {
  const { userId } = req.params
  
  db.get(
    `SELECT 
       COUNT(DISTINCT rh.book_id) as total_books,
       AVG(rh.rating) as average_rating,
       COUNT(CASE WHEN rh.completed_at >= datetime('now', '-30 days') THEN 1 END) as books_this_month
     FROM reading_history rh
     WHERE rh.user_id = ?`,
    [userId],
    (err, stats) => {
      if (err) {
        res.status(500).json({ error: err.message })
        return
      }
      
      // Get favorite genres
      db.all(
        `SELECT b.genre, COUNT(*) as count
         FROM reading_history rh
         INNER JOIN books b ON rh.book_id = b.id
         WHERE rh.user_id = ?
         GROUP BY b.genre
         ORDER BY count DESC
         LIMIT 5`,
        [userId],
        (err, genres) => {
          if (err) {
            res.status(500).json({ error: err.message })
            return
          }
          
          res.json({
            ...stats,
            favorite_genres: genres.map(g => g.genre)
          })
        }
      )
    }
  )
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// Start server
app.listen(PORT, () => {
  console.log(`BrainyReads server running on port ${PORT}`)
})

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message)
    } else {
      console.log('Database connection closed')
    }
    process.exit(0)
  })
}) 