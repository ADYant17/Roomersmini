import React, { useState } from 'react';
import { School, Menu, X } from 'lucide-react';

const Navbar = ({ onNavigate, currentView }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <button
                        onClick={() => onNavigate('landing')}
                        className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                    >
                        <div className="bg-slate-900 p-1.5 rounded-lg">
                            <School className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-slate-900 tracking-tight">Roomers</span>
                    </button>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {currentView === 'landing' && (
                            <>
                                <a href="#safety" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">Safety</a>
                                <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">How it Works</a>
                            </>
                        )}
                        <div className="flex items-center space-x-4">
                            {currentView !== 'login' && (
                                <button
                                    onClick={() => onNavigate('login')}
                                    className="text-slate-900 font-medium hover:text-blue-600 transition-colors"
                                >
                                    Log In
                                </button>
                            )}
                            {currentView !== 'signup' && (
                                <button
                                    onClick={() => onNavigate('signup')}
                                    className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-slate-900/20"
                                >
                                    Get Verified
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-slate-900 p-2"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-slate-200">
                    <div className="px-4 pt-2 pb-6 space-y-4">
                        <button onClick={() => { onNavigate('landing'); setIsMenuOpen(false) }} className="block w-full text-left text-slate-600 font-medium py-2">Home</button>
                        <button onClick={() => { onNavigate('login'); setIsMenuOpen(false) }} className="block w-full text-left text-slate-600 font-medium py-2">Log In</button>
                        <button onClick={() => { onNavigate('signup'); setIsMenuOpen(false) }} className="w-full bg-slate-900 text-white px-5 py-3 rounded-lg font-medium">
                            Get Verified
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
