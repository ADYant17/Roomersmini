import React, { useState } from 'react';
import { School, Mail, Key, AlertCircle, Loader2, Lock } from 'lucide-react';

const LoginPage = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);

            // Mock Authentication Logic (LocalStorage)
            const storedUser = JSON.parse(localStorage.getItem('roomers_user'));

            if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
                // Successful Login
                localStorage.setItem('roomers_session', 'true');
                alert("Welcome back! Redirecting to dashboard...");
                onNavigate('dashboard'); // Redirect to dashboard
            } else {
                setError("Invalid email or password. Please try again.");
            }
        }, 1000);
    };

    const isFormValid = formData.email && formData.password;

    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-12 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-900/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

            <div className="w-full max-w-md relative z-10">
                {/* Logo/Header above card */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center p-3 bg-white rounded-2xl shadow-sm mb-4">
                        <School className="w-8 h-8 text-slate-900" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Welcome back</h2>
                    <p className="text-slate-500 mt-2">Enter your credentials to access the community.</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10">
                    <form onSubmit={handleLogin} className="space-y-6">

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">College Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="email"
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 placeholder:text-slate-400"
                                    placeholder="student@university.edu"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-sm font-semibold text-slate-700">Password</label>
                                <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Key className="h-5 w-5 text-slate-400" />
                                </div>
                                <input
                                    type="password"
                                    required
                                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900 placeholder:text-slate-400"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="flex items-start p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
                                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                <span>{error}</span>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!isFormValid || isLoading}
                            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    Verifying...
                                </>
                            ) : (
                                'Log In'
                            )}
                        </button>
                    </form>

                    {/* Verification Badge */}
                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center space-x-2 text-slate-400 text-sm">
                        <Lock className="w-4 h-4" />
                        <span>Secure Verification System</span>
                    </div>
                </div>

                {/* Create Account Link */}
                <div className="text-center mt-8">
                    <p className="text-slate-600">
                        Don't have an account?{' '}
                        <button
                            onClick={() => onNavigate('signup')}
                            className="font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                        >
                            Get Verified & Join
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
