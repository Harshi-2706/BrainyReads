import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import MoodQuiz from './pages/MoodQuiz'
import Recommendations from './pages/Recommendations'
import Dashboard from './pages/Dashboard'
import Explore from './pages/Explore'
import BookDetails from './components/BookDetails'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mood-quiz" element={<MoodQuiz />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 