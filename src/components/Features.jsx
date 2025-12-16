import React from 'react';
import { Lock, EyeOff, UserCheck, School } from 'lucide-react';

const Features = () => {
    return (
        <section className="py-20 bg-white border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* The Visual Representation of "Locked" */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600/5 rounded-2xl transform rotate-3"></div>
                        <div className="relative bg-slate-50 border border-slate-200 rounded-2xl p-6 overflow-hidden">
                            {/* Header Mockup */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="h-8 w-32 bg-slate-200 rounded animate-pulse"></div>
                                <div className="h-8 w-8 bg-slate-200 rounded-full animate-pulse"></div>
                            </div>

                            {/* Blurred Content */}
                            <div className="space-y-4 filter blur-sm select-none opacity-50">
                                <div className="flex items-center space-x-4">
                                    <div className="h-16 w-16 bg-slate-300 rounded-full"></div>
                                    <div className="space-y-2">
                                        <div className="h-4 w-40 bg-slate-300 rounded"></div>
                                        <div className="h-4 w-24 bg-slate-200 rounded"></div>
                                    </div>
                                </div>
                                <div className="h-32 bg-slate-200 rounded w-full"></div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-24 bg-slate-200 rounded"></div>
                                    <div className="h-24 bg-slate-200 rounded"></div>
                                </div>
                            </div>

                            {/* The Lock Overlay */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm z-10">
                                <div className="bg-white p-4 rounded-full shadow-xl mb-4">
                                    <Lock className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Listings are Private</h3>
                                <p className="text-slate-600 text-center max-w-xs">
                                    Join verified students to unlock full profiles and room details.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* The Explanation */}
                    <div>
                        <div className="inline-flex items-center space-x-2 text-blue-600 font-bold mb-4">
                            <EyeOff className="w-5 h-5" />
                            <span className="uppercase tracking-wider text-sm">Privacy First</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Why can't I browse listings freely?
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Most roommate sites are public, leading to scams, bots, and unwanted attention. Roomers is different. We believe your living situation is private information that should only be shared with verified peers.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="mt-1 bg-green-100 p-2 rounded-lg">
                                    <UserCheck className="w-5 h-5 text-green-700" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">100% Verified Humans</h4>
                                    <p className="text-slate-500">Every user is ID-verified. No anonymous browsing.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="mt-1 bg-blue-100 p-2 rounded-lg">
                                    <School className="w-5 h-5 text-blue-700" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Student Only Ecosystem</h4>
                                    <p className="text-slate-500">We verify .edu email addresses to ensure campus relevance.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;
