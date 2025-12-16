import React from 'react';
import { CheckCircle } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Three Steps to Safety</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Our vetting process is rigorous but fast. Here is how you gain access.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-slate-100 rounded-full group-hover:bg-blue-50 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">1</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Login</h3>
                            <p className="text-slate-600">
                                Sign up using your email address. This links your account to your specific campus.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-slate-100 rounded-full group-hover:bg-blue-50 transition-colors"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">2</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Identity Verification</h3>
                            <p className="text-slate-600">
                                Upload a student ID or government ID. Our secure system matches your name to your email record.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white p-8 rounded-2xl border border-blue-200 hover:shadow-lg transition-shadow relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-xl mb-6">
                                <CheckCircle size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Unlock Access</h3>
                            <p className="text-slate-600">
                                Once approved, the "locks" are removed. Browse rooms, chat with verified students, and find your match.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
