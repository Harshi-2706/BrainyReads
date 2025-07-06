import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '700', marginBottom: '1rem', color: 'white' }}>
          Discover Your Perfect <span className="text-gradient">Book Match</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Let AI understand your mood, interests, and reading preferences to recommend books that truly resonate with you.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/mood-quiz" className="btn btn-primary">
            🧠 Take Mood Quiz
          </Link>
          <Link to="/explore" className="btn btn-secondary">
            📚 Explore Books
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div className="card">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📜</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2d3748' }}>
            Mood & Personality Quiz
          </h3>
          <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
            Answer fun questions about your current mood, interests, and reading preferences to get personalized recommendations.
          </p>
        </div>

        <div className="card">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2d3748' }}>
            Text-based Input
          </h3>
          <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
            Simply describe how you're feeling or what you're looking for, and our AI will find the perfect books for you.
          </p>
        </div>

        <div className="card">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🧠</div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2d3748' }}>
            Smart Recommendations
          </h3>
          <p style={{ color: '#4a5568', lineHeight: '1.6' }}>
            Advanced AI algorithms analyze your preferences and suggest books that match your mood and interests.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="card" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#2d3748' }}>
          How It Works
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>1️⃣</div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2d3748' }}>
              Share Your Mood
            </h4>
            <p style={{ color: '#4a5568' }}>
              Tell us how you're feeling or take our mood quiz
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>2️⃣</div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2d3748' }}>
              AI Analysis
            </h4>
            <p style={{ color: '#4a5568' }}>
              Our AI analyzes your preferences and mood
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>3️⃣</div>
            <h4 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2d3748' }}>
              Get Recommendations
            </h4>
            <p style={{ color: '#4a5568' }}>
              Receive personalized book suggestions
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '1rem', color: 'white' }}>
          Ready to Find Your Next Favorite Book?
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem' }}>
          Join thousands of readers who have discovered amazing books through BrainyReads
        </p>
        <Link to="/mood-quiz" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
          Start Your Journey 🚀
        </Link>
      </div>
    </div>
  )
}

export default Home 