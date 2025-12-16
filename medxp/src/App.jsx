import React, { useState } from "react";
import Header from "./components/header";
import ChatWindow from "./components/chatwindow";
import InputBox from "./components/inputbox";
import medexplain from "./components/medexplain";
import "./index.css";

export default function App() {
  const [messages, setMessages] = useState([]);

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl flex flex-col h-[90vh]">
        <Header />

        <ChatWindow messages={messages} />

        <InputBox messages={messages} setMessages={setMessages} />
      </div>
    </div>
  );
}

