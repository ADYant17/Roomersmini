import React, { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);

  return (
    <header className="bg-gradient-to-r from-teal-500 to-green-500 text-white p-4 rounded-t-xl shadow-lg flex items-center justify-between">
      <h1 className="text-xl font-bold flex items-center">
        <i data-lucide="brain-circuit" className="w-6 h-6 mr-2"></i>
        MedExplain AI
      </h1>
      <span className="text-sm font-light">Healthcare Information Assistant</span>
    </header>
  );
}
