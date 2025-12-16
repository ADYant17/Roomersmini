import React, { useEffect } from "react";

export default function Message({ sender, text, sources }) {
  useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);

  return (
    <div className={`flex ${sender === "user" ? "justify-end" : "justify-start"}`}>
      <div
        className={`message-box ${
          sender === "user" ? "user-message" : "ai-message"
        }`}
        dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br>") }}
      ></div>
    </div>
  );
}
