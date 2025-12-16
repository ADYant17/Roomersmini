import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Footer from './components/Footer';

const App = () => {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'signup' | 'login'

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar onNavigate={setCurrentView} currentView={currentView} />

      {currentView === 'landing' ? (
        <>
          <LandingPage onNavigate={setCurrentView} />
          <Footer />
        </>
      ) : currentView === 'signup' ? (
        <SignupPage onNavigate={setCurrentView} />
      ) : (
        <LoginPage onNavigate={setCurrentView} />
      )}
    </div>
  );
};

export default App;
