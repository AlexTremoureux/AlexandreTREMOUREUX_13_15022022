import React from 'react';
import "./css/main.css";
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Router from './utils/Router';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
