import React, { useState } from 'react';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import SafetyStats from './SafetyStats';
import CallToAction from './CallToAction';
import { X, Shield, CheckCircle, AlertTriangle, Lock, Phone } from 'lucide-react';

const LandingPage = ({ onNavigate }) => {
    const [showSafetyModal, setShowSafetyModal] = useState(false);

    return (
        <>
            <Hero onNavigate={onNavigate} onShowSafety={() => setShowSafetyModal(true)} />
            <Features />
            <HowItWorks />
            <SafetyStats />
            <CallToAction onNavigate={onNavigate} />

            {/* Safety Modal */}
            {showSafetyModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
                    onClick={(e) => e.target === e.currentTarget && setShowSafetyModal(false)}>

                    <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-slate-100 p-6 flex justify-between items-center z-10">
                            <div className="flex items-center space-x-3">
                                <div className="bg-blue-100 p-2 rounded-lg">
                                    <Shield className="w-6 h-6 text-blue-600" />
                                </div>
                                <h2 className="text-xl font-bold text-slate-900">Safety First</h2>
                            </div>
                            <button
                                onClick={() => setShowSafetyModal(false)}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500 hover:text-slate-700"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 space-y-8">

                            {/* Roommate Safety */}
                            <section>
                                <div className="flex items-center mb-4 space-x-2 text-slate-900">
                                    <Shield className="w-5 h-5 text-green-600" />
                                    <h3 className="text-lg font-bold">Roommate Safety</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Meet in public first.</strong> Always arrange the first meeting in a busy coffee shop or campus center.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Verify identity.</strong> Ask to see their College ID card to confirm they are a student.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Discuss expectations early.</strong> Be clear about smoking, guests, noise, and cleanliness habits to avoid conflicts.</span>
                                    </li>
                                </ul>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Accommodation Safety */}
                            <section>
                                <div className="flex items-center mb-4 space-x-2 text-slate-900">
                                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                                    <h3 className="text-lg font-bold">Room/Accommodation Safety</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Inspect in person.</strong> Photos can be misleading. Visit the property to check for safety and condition.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Confirm legitimate lease.</strong> Read the agreement carefully. Do not pay without a contract.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Verify ownership.</strong> Ensure the person renting the room actually has the authority to do so.</span>
                                    </li>
                                </ul>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Online Safety */}
                            <section>
                                <div className="flex items-center mb-4 space-x-2 text-slate-900">
                                    <Lock className="w-5 h-5 text-indigo-500" />
                                    <h3 className="text-lg font-bold">Online Safety</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Protect personal info.</strong> Never share your social security number, bank details, or home address publicly.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Keep it on platform.</strong> Use the built-in messaging until you verify the person is real and safe.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Report suspicion.</strong> If a profile looks fake or abusive, report it immediately.</span>
                                    </li>
                                </ul>
                            </section>

                            <hr className="border-slate-100" />

                            {/* Emergency Preparedness */}
                            <section>
                                <div className="flex items-center mb-4 space-x-2 text-slate-900">
                                    <Phone className="w-5 h-5 text-red-500" />
                                    <h3 className="text-lg font-bold">Emergency Preparedness</h3>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Save emergency numbers.</strong> Keep police, fire, and campus security numbers saved.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-600"><strong>Share your plans.</strong> Tell a trusted friend or family member who you are meeting and where.</span>
                                    </li>
                                </ul>
                            </section>

                            <div className="bg-slate-50 p-4 rounded-xl text-center text-sm text-slate-500">
                                Stay safe! Your security is our priority.
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default LandingPage;
