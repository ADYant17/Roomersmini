import React from 'react';
import { School } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                    <School className="w-5 h-5 text-slate-400" />
                    <span className="font-bold text-slate-700">Roomers</span>
                </div>
                <div className="text-sm text-slate-500">
                    &copy; {new Date().getFullYear()} Roomers Project. Designed for Campus Safety.
                </div>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-slate-400 hover:text-slate-600 text-sm">Privacy</a>
                    <a href="#" className="text-slate-400 hover:text-slate-600 text-sm">Terms</a>
                    <a href="#" className="text-slate-400 hover:text-slate-600 text-sm">Contact Support</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
