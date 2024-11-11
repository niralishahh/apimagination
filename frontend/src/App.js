import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Favs from './pages/Favs.js';
import Home from './pages/Home.js';


import './App.css';
import Header from './components/Header.js';

function App() {
      /*
      try {
        console.log('Entering function');
        const response = await fetch('/news');
        if (!response.ok) {
          // If the response is not OK (status code other than 200)
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json(); // Awaiting response.json() to parse the data correctly
        console.log(data); // Logging the parsed data to verify it
        setArticles(data);
      } catch (error) {
        console.error('Fetching articles error', error);
      }*/


  return (
    <Router>
      <div className='App'>
        <Header />
        <div className="navbar">
          <Link to="/">Home</Link>
          <Link to="/favs">Favorites</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>`  `
          
      </div>
    </Router>
  );
}

export default App;
