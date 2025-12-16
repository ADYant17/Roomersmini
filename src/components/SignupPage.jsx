import React, { useState } from 'react';
import {
    Shield,
    ChevronLeft,
    EyeOff,
    UserCheck,
    Mail,
    CheckCircle,
    CreditCard,
    Hash,
    Upload,
    AlertCircle,
    ArrowRight,
    Loader2
} from 'lucide-react';

const SignupPage = ({ onNavigate }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        email: '',
        otp: '',
        password: '',
        rollNumber: '',

        termsAgreed: false
    });

    const [generatedOtp, setGeneratedOtp] = useState(null);
    const [otpExpiry, setOtpExpiry] = useState(null);

    const [verificationMethod, setVerificationMethod] = useState('id'); // 'id' or 'roll'
    const [otpStatus, setOtpStatus] = useState('idle'); // 'idle', 'sending', 'sent', 'verified'
    const [isLoading, setIsLoading] = useState(false);
    const [fileName, setFileName] = useState('');

    // OTP Logic
    const handleSendOtp = () => {
        if (!formData.email || !formData.email.includes('.edu')) {
            alert("Please enter a valid .edu email address first.");
            return;
        }
        setOtpStatus('sending');

        // Generate random 6-digit OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedOtp(otp);
        setOtpExpiry(Date.now() + 5 * 60 * 1000); // 5 minutes expiration

        setTimeout(() => {
            setOtpStatus('sent');
            console.log(`[Mock Email Service] To: ${formData.email}, Code: ${otp}`);
            alert(`MOCK EMAIL SENT\n\nTo: ${formData.email}\nSubject: Verification Code\n\nYour OTP is: ${otp}\n\n(Expires in 5 minutes)`);
        }, 1500);
    };

    const handleVerifyOtp = () => {
        if (!formData.otp || formData.otp.length !== 6) {
            alert("Please enter a valid 6-digit code.");
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);

            if (Date.now() > otpExpiry) {
                alert("OTP has expired. Please request a new one.");
                setOtpStatus('idle');
                return;
            }

            if (formData.otp === generatedOtp) {
                setOtpStatus('verified');
                alert("Email verification successful!");
            } else {
                alert("Incorrect OTP. Please check the alert/console for the correct code.");
            }
        }, 1000);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) setFileName(file.name);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (otpStatus !== 'verified' || !formData.termsAgreed) return;

        // Final submission logic would go here
        alert("Verification submitted successfully! An admin will review your details.");
        onNavigate('landing');
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-12 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 shadow-2xl rounded-3xl overflow-hidden bg-white">

                {/* Left Side: Trust & Info Panel */}
                <div className="bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                    {/* Decorative shapes */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                    <div className="relative z-10">
                        <button
                            onClick={() => onNavigate('landing')}
                            className="flex items-center text-slate-400 hover:text-white transition-colors mb-8"
                        >
                            <ChevronLeft size={20} />
                            <span className="ml-2 font-medium">Back to Home</span>
                        </button>

                        <div className="mb-8">
                            <div className="bg-blue-900/50 p-3 rounded-2xl w-fit mb-6 border border-blue-800">
                                <Shield className="w-8 h-8 text-blue-400" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 leading-tight">Join the Verified Community</h2>
                            <p className="text-slate-300 text-lg">
                                To ensure the safety of all roommates, we require valid university identification.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-slate-800 p-2 rounded-lg mt-1">
                                    <EyeOff className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Private Profiles</h4>
                                    <p className="text-sm text-slate-400">Your info is hidden from search engines and non-students.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-slate-800 p-2 rounded-lg mt-1">
                                    <UserCheck className="w-5 h-5 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Manual Review</h4>
                                    <p className="text-sm text-slate-400">Admins review ID uploads to prevent bots and fraud.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500 relative z-10">
                        By signing up, you agree to our Code of Conduct. Harassment or fraudulent behavior results in an immediate ban.
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="p-8 md:p-12 bg-white overflow-y-auto max-h-[85vh]">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Student Verification</h3>
                    <p className="text-slate-500 mb-8">Please complete all fields to request access.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Full Legal Name</label>
                            <input
                                type="text"
                                required
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-slate-900"
                                placeholder="As it appears on your ID"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            />
                        </div>

                        {/* Gender */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">Gender</label>
                            <div className="flex space-x-4">
                                {['Male', 'Female', 'Other'].map((option) => (
                                    <label key={option} className="flex-1 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value={option}
                                            className="peer sr-only"
                                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                        />
                                        <div className="text-center py-2 px-4 rounded-lg border border-slate-200 text-slate-600 peer-checked:bg-slate-900 peer-checked:text-white peer-checked:border-slate-900 transition-all font-medium text-sm">
                                            {option}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Email with OTP Flow */}
                        <div className="p-5 border border-slate-100 bg-slate-50 rounded-xl space-y-4">
                            <div>
                                <label className="flex items-center text-sm font-semibold text-slate-700 mb-2">
                                    <Mail className="w-4 h-4 mr-2 text-slate-400" />
                                    College Email
                                </label>
                                <div className="flex space-x-2">
                                    <input
                                        type="email"
                                        required
                                        disabled={otpStatus === 'verified'}
                                        className={`flex-1 px-4 py-3 bg-white border ${otpStatus === 'verified' ? 'border-green-500 text-green-700' : 'border-slate-200'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                                        placeholder="student@university.edu"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                    {otpStatus !== 'verified' && (
                                        <button
                                            type="button"
                                            onClick={handleSendOtp}
                                            disabled={otpStatus === 'sending' || otpStatus === 'sent'}
                                            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 disabled:opacity-50 transition-colors whitespace-nowrap"
                                        >
                                            {otpStatus === 'sending' ? 'Sending...' : otpStatus === 'sent' ? 'Sent' : 'Send OTP'}
                                        </button>
                                    )}
                                    {otpStatus === 'verified' && (
                                        <div className="flex items-center px-4 text-green-600 font-bold text-sm bg-green-50 border border-green-200 rounded-xl">
                                            <CheckCircle className="w-4 h-4 mr-1" />
                                            Verified
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* OTP Input (Shown only if sent and not yet verified) */}
                            {otpStatus === 'sent' && (
                                <div className="animate-in fade-in slide-in-from-top-2">
                                    <label className="block text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">Enter Verification Code</label>
                                    <div className="flex space-x-2">
                                        <input
                                            type="text"
                                            maxLength="6"
                                            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-center text-lg tracking-widest font-mono focus:ring-2 focus:ring-blue-500 outline-none"
                                            placeholder="000000"
                                            value={formData.otp}
                                            onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                                        />
                                        <button
                                            type="button"
                                            onClick={handleVerifyOtp}
                                            className="px-6 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
                                        >
                                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Verify'}
                                        </button>
                                    </div>

                                    <p className="text-xs text-slate-400 mt-2">Check console or wait for alert for code</p>
                                </div>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Create Password</label>
                            <input
                                type="password"
                                required
                                minLength="6"
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                placeholder="Min. 6 characters"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        {/* College ID Verification Switcher */}
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">College Verification Method</label>
                            <div className="flex bg-slate-100 p-1 rounded-xl mb-4">
                                <button
                                    type="button"
                                    onClick={() => setVerificationMethod('id')}
                                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${verificationMethod === 'id' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    <div className="flex items-center justify-center">
                                        <CreditCard className="w-4 h-4 mr-2" />
                                        Upload ID Card
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setVerificationMethod('roll')}
                                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${verificationMethod === 'roll' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    <div className="flex items-center justify-center">
                                        <Hash className="w-4 h-4 mr-2" />
                                        Roll Number
                                    </div>
                                </button>
                            </div>

                            {/* Conditional Inputs */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center border-dashed border-2 hover:bg-blue-50/50 transition-colors group cursor-pointer relative">
                                {verificationMethod === 'id' ? (
                                    <>
                                        <input type="file" onChange={handleFileUpload} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*,.pdf" />
                                        <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2 group-hover:text-blue-500 transition-colors" />
                                        <p className="text-sm font-medium text-slate-700">
                                            {fileName ? <span className="text-blue-600">{fileName}</span> : "Click to upload ID Card"}
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1">PNG, JPG or PDF (Max 5MB)</p>
                                        <div className="mt-2 text-xs text-orange-600 bg-orange-50 inline-block px-2 py-1 rounded">
                                            Visible only to admins
                                        </div>
                                    </>
                                ) : (
                                    <div className="text-left">
                                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Enter Roll Number</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. 21BCE1045"
                                            className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                            value={formData.rollNumber}
                                            onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                                        />
                                        <p className="text-xs text-slate-400 mt-2">We will cross-reference this with university records.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Terms and Submit */}
                        <div className="pt-4 border-t border-slate-100">
                            <label className="flex items-center space-x-3 mb-6 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                                    checked={formData.termsAgreed}
                                    onChange={(e) => setFormData({ ...formData, termsAgreed: e.target.checked })}
                                />
                                <span className="text-sm text-slate-600">
                                    I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> & <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                                </span>
                            </label>

                            <button
                                type="submit"
                                disabled={otpStatus !== 'verified' || !formData.termsAgreed}
                                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center space-x-2"
                            >
                                <span>Submit Verification</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            {otpStatus !== 'verified' && (
                                <div className="flex items-center justify-center mt-4 text-xs text-orange-600">
                                    <AlertCircle className="w-3 h-3 mr-1" />
                                    Please verify your email to enable submission
                                </div>
                            )}
                        </div>

                    </form>
                </div>
            </div >
        </div >
    );
};

export default SignupPage;
