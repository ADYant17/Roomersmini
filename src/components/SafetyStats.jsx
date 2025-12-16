import React from 'react';
import { FileCheck, Lock, EyeOff } from 'lucide-react';

const SafetyStats = () => {
    return (
        <section id="safety" className="py-20 bg-slate-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Your Data stays with you.</h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            We don't sell data to advertisers, and we don't index profiles on search engines. Your profile is only visible to verified students at your specific university.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3 text-slate-300">
                                <FileCheck className="w-5 h-5 text-blue-400" />
                                <span>Manual moderation of flagged content</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-300">
                                <Lock className="w-5 h-5 text-blue-400" />
                                <span>End-to-end encryption for chat messages</span>
                            </li>
                            <li className="flex items-center space-x-3 text-slate-300">
                                <EyeOff className="w-5 h-5 text-blue-400" />
                                <span>Zero search engine indexing</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                        <div className="text-center">
                            <div className="text-5xl font-bold text-blue-400 mb-2">0</div>
                            <div className="text-slate-400 font-medium">Public Listings</div>
                        </div>
                        <div className="my-8 border-t border-slate-700"></div>
                        <div className="text-center">
                            <div className="text-5xl font-bold text-blue-400 mb-2">100%</div>
                            <div className="text-slate-400 font-medium">Verified User Base</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SafetyStats;
