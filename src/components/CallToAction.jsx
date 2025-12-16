import React from 'react';

const CallToAction = ({ onNavigate }) => {
    return (
        <section className="py-24 bg-white text-center px-4">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to find your roommate?</h2>
                <p className="text-lg text-slate-600 mb-10">
                    Join the only platform that takes your safety as seriously as you do.
                    Sign up takes less than 2 minutes.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                        onClick={() => onNavigate('signup')}
                        className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-slate-900/10"
                    >
                        Create Free Account
                    </button>
                    <button className="w-full sm:w-auto text-slate-600 hover:text-slate-900 font-medium px-8 py-4">
                        Already verified? Log in
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
