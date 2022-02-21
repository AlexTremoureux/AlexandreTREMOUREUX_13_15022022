import React from 'react';
import './App.css';
import "./css/main.css";
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import HomePage from './container/HomePage';
import SignIn from './container/SignIn';
import User from './container/User';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HomePage />
      <SignIn />
      <User />
      <Footer />
      
    </div>
  );
}

export default App;
