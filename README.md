# 📚 BrainyReads - Your AI Book Matchmaker

An intelligent web platform that recommends books based on a user's mood, interests, reading history, or even a short journal entry. It leverages NLP and recommendation systems to create personalized book lists.

## 🌟 Features

- **📜 Mood/Personality Quiz** - Users answer fun questions to define preferences
- **📝 Text-based Input** - Users can type how they feel or describe their mood
- **📚 Smart Book Recommendations** - AI suggests books based on input using NLP & ML models
- **🧠 Personalized Book Dashboard** - Shows genres you love, top authors, saved books
- **🗂️ Filter & Explore** - Search by genre, emotion, author, popularity, ratings
- **✍️ Feedback System** - Users can rate recommendations and refine future ones

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface and components
- **React Router** - Navigation and routing
- **CSS3** - Custom styling with modern design
- **Vite** - Fast build tool and development server

### Backend
- **Node.js** - Server runtime
- **Express.js** - Web framework and API
- **SQLite** - Lightweight database
- **CORS** - Cross-origin resource sharing

### Future Data Science Integration
- **Python** - ML/NLP processing
- **Scikit-learn** - Machine learning algorithms
- **HuggingFace Transformers** - NLP models
- **NLTK/SpaCy** - Text processing

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BrainyReads
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   # Start frontend (Vite dev server)
   npm run dev
   
   # Start backend (Express server)
   npm run server
   ```

4. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
BrainyReads/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── BookDetails.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MoodQuiz.jsx
│   │   ├── Recommendations.jsx
│   │   ├── Dashboard.jsx
│   │   └── Explore.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── server/
│   └── index.js
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Pages Overview

### 🏠 Home Page
- Welcoming introduction to BrainyReads
- Feature highlights and call-to-action
- Navigation to mood quiz and book exploration

### 🧠 Mood Quiz Page
- Interactive mood selection with emojis
- Text input option for detailed mood description
- Step-by-step quiz flow

### 📚 Recommendations Page
- Displays personalized book suggestions
- Book cards with covers, ratings, and descriptions
- Modal for detailed book information
- Feedback system for improving recommendations

### 📊 Dashboard Page
- Personal reading statistics and progress
- Favorite genres and reading history
- Saved books and reading goals
- Mood-based reading analytics

### 🔍 Explore Page
- Advanced search and filtering
- Browse books by genre, mood, author
- Sort by popularity, rating, year, title
- Comprehensive book catalog

## 🔧 API Endpoints

### Books & Recommendations
- `GET /api/books` - Get all books with filters
- `POST /api/recommendations` - Get personalized recommendations

### User Data
- `POST /api/saved-books` - Save a book to user's list
- `GET /api/saved-books/:userId` - Get user's saved books
- `POST /api/reading-history` - Add to reading history
- `GET /api/reading-history/:userId` - Get reading history
- `GET /api/user-stats/:userId` - Get user statistics

### Health Check
- `GET /api/health` - API status check

## 🗄️ Database Schema

### Tables
- **users** - User accounts and authentication
- **books** - Book catalog with metadata
- **user_preferences** - User reading preferences
- **saved_books** - User's saved book list
- **reading_history** - User's reading activity

## 🎨 Design Features

- **Modern UI** - Clean, responsive design with gradient backgrounds
- **Interactive Elements** - Hover effects, smooth transitions
- **Mood-based Styling** - Color-coded mood indicators
- **Mobile Responsive** - Works on all device sizes
- **Loading States** - Smooth loading animations

## 🔮 Future Enhancements

### Data Science Integration
- **NLP Pipeline** - Sentiment analysis and emotion classification
- **Recommendation Engine** - Collaborative and content-based filtering
- **User Embeddings** - Personalized preference learning
- **External APIs** - Google Books, Open Library integration

### Additional Features
- **💬 Chatbot** - Conversational book recommendations
- **🎧 Audiobook Support** - Include audiobook suggestions
- **📊 Analytics Dashboard** - Advanced reading insights
- **📥 Export Features** - PDF/Excel reading list export
- **🔐 User Authentication** - Secure login and profiles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team Roles

- **🧑‍💻 Web Developer** - Frontend/Backend development
- **🧑‍🔬 Data Scientist** - ML/NLP models and recommendation engine

## 🚀 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy to Vercel
```

### Backend (Render/Heroku)
```bash
# Set environment variables
# Deploy to your preferred platform
```

---

**BrainyReads** - Where AI meets your reading journey! 📚✨ 