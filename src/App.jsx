import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

const App = () => {
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'signup' | 'login'

  // Session Check
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('roomers_session') === 'true';
    if (isLoggedIn && (currentView === 'login' || currentView === 'signup')) {
      setCurrentView('dashboard');
    }
  }, [currentView]);

  const handleLogout = () => {
    localStorage.removeItem('roomers_session');
    setCurrentView('landing');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar onNavigate={setCurrentView} currentView={currentView} onLogout={handleLogout} />

      {currentView === 'landing' ? (
        <>
          <LandingPage onNavigate={setCurrentView} />
          <Footer />
        </>
      ) : currentView === 'signup' ? (
        <SignupPage onNavigate={setCurrentView} />
      ) : currentView === 'login' ? (
        <LoginPage onNavigate={setCurrentView} />
      ) : currentView === 'dashboard' ? (
        <Dashboard onNavigate={setCurrentView} onLogout={handleLogout} />
      ) : (
        <LandingPage onNavigate={setCurrentView} />
      )}
    </div>
  );
};

export default App;
