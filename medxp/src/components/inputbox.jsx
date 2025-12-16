import React, { useState } from "react";
import { sendToGemini } from "../utils/geminiAPI";

export default function InputBox({ messages, setMessages }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    setLoading(true);

    // Send to Gemini
    const reply = await sendToGemini(input);

    setMessages((prev) => [...prev, { sender: "ai", text: reply || "Error." }]);
    setLoading(false);
  };

  return (
    <div className="p-4 border-t border-gray-200">
      {loading && (
        <div className="text-center p-2 text-sm text-teal-600 font-medium">
          <i data-lucide="loader-circle" className="w-5 h-5 inline-block mr-2 animate-spin"></i>
          Analyzing complex data...
        </div>
      )}

      <div className="flex space-x-3">
        <input
          type="text"
          value={input}
          placeholder="Ask something..."
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-3 border border-gray-300 rounded-lg"
        />

        <button
          className="bg-teal-500 hover:bg-teal-600 text-white px-5 py-3 rounded-lg"
          onClick={handleSend}
          disabled={loading}
        >
          <i data-lucide="send" className="w-5 h-5"></i>
        </button>
      </div>
    </div>
  );
}
