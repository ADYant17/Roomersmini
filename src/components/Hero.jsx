import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

const Hero = ({ onNavigate, onShowSafety }) => {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-semibold text-blue-700">Campus Exclusive Platform</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                    Find a roommate you can actually <span className="text-blue-600">trust</span>.
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                    Roomers is the verified roommate finder. We hide all listings and profiles from the public web to ensure only verified people can access our community.We also provide rooms of user preference.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        onClick={() => onNavigate('signup')}
                        className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center space-x-2"
                    >
                        <span>Lets Get Started</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                        onClick={onShowSafety}
                        className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center"
                    >
                        Learn about Safety
                    </button>
                </div>
                <p className="mt-6 text-sm text-slate-400">

                </p>
            </div>
        </section>
    );
};

export default Hero;
