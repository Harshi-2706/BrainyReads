import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MoodQuiz = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [mood, setMood] = useState('')
  const [textInput, setTextInput] = useState('')
  const [selectedMood, setSelectedMood] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const moods = [
    { id: 'happy', emoji: '😊', label: 'Happy & Uplifted', description: 'Feeling joyful and positive' },
    { id: 'sad', emoji: '😢', label: 'Sad & Melancholic', description: 'Feeling down or reflective' },
    { id: 'excited', emoji: '🤩', label: 'Excited & Energetic', description: 'Full of energy and enthusiasm' },
    { id: 'calm', emoji: '😌', label: 'Calm & Peaceful', description: 'Feeling relaxed and content' },
    { id: 'curious', emoji: '🤔', label: 'Curious & Inquisitive', description: 'Wanting to learn and explore' },
    { id: 'stressed', emoji: '😰', label: 'Stressed & Anxious', description: 'Feeling overwhelmed or worried' },
    { id: 'nostalgic', emoji: '🥺', label: 'Nostalgic & Sentimental', description: 'Thinking about the past' },
    { id: 'adventurous', emoji: '🏃‍♂️', label: 'Adventurous & Bold', description: 'Ready for new experiences' }
  ]

  const handleMoodSelect = (moodId) => {
    setSelectedMood(moodId)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      navigate('/recommendations', { 
        state: { 
          mood: selectedMood || 'text-input',
          textInput: textInput,
          selectedMood: selectedMood
        } 
      })
    }, 2000)
  }

  const renderStep1 = () => (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
        How would you like to share your mood?
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <button 
          className="btn btn-secondary" 
          style={{ textAlign: 'left', padding: '1.5rem', fontSize: '1.125rem' }}
          onClick={() => setCurrentStep(2)}
        >
          🎯 Take a Mood Quiz
          <div style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.7 }}>
            Answer a few questions to help us understand your current mood
          </div>
        </button>
        
        <button 
          className="btn btn-secondary" 
          style={{ textAlign: 'left', padding: '1.5rem', fontSize: '1.125rem' }}
          onClick={() => setCurrentStep(3)}
        >
          ✍️ Write About Your Mood
          <div style={{ fontSize: '0.875rem', marginTop: '0.5rem', opacity: 0.7 }}>
            Describe how you're feeling in your own words
          </div>
        </button>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
        How are you feeling today?
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {moods.map((moodOption) => (
          <div
            key={moodOption.id}
            className={`mood-option ${selectedMood === moodOption.id ? 'selected' : ''}`}
            onClick={() => handleMoodSelect(moodOption.id)}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{moodOption.emoji}</div>
            <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{moodOption.label}</div>
            <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>{moodOption.description}</div>
          </div>
        ))}
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button className="btn btn-secondary" onClick={() => setCurrentStep(1)}>
          ← Back
        </button>
        <button 
          className="btn btn-primary" 
          onClick={handleSubmit}
          disabled={!selectedMood || isLoading}
        >
          {isLoading ? (
            <>
              <span className="loading"></span> Finding Books...
            </>
          ) : (
            'Get Recommendations →'
          )}
        </button>
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: '700', textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
        Tell us about your mood
      </h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2d3748' }}>
          Describe how you're feeling or what you're looking for:
        </label>
        <textarea
          className="input"
          rows="6"
          placeholder="e.g., I'm feeling a bit stressed from work and want something light and uplifting to read before bed..."
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          style={{ resize: 'vertical' }}
        />
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button className="btn btn-secondary" onClick={() => setCurrentStep(1)}>
          ← Back
        </button>
        <button 
          className="btn btn-primary" 
          onClick={handleSubmit}
          disabled={!textInput.trim() || isLoading}
        >
          {isLoading ? (
            <>
              <span className="loading"></span> Analyzing...
            </>
          ) : (
            'Get Recommendations →'
          )}
        </button>
      </div>
    </div>
  )

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}
      {currentStep === 3 && renderStep3()}
    </div>
  )
}

export default MoodQuiz 