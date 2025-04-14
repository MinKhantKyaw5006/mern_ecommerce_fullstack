// src/App.tsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; // Import Home component correctly


function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      <Header/>
      <Routes>
        {/* Set up route for the home page */}
        <Route path="/" element={<Home />} />
      </Routes>


    </Router>
  );
}

export default App;
