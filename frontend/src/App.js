import React from 'react';
import './styles/Navbar.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

