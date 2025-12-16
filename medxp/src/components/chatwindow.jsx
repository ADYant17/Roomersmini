
export default function ChatWindow() {
  return (
    <div id="chat-window" className="flex-grow p-4 space-y-4">

      {/* Initial Message */}
      <div className="flex justify-start">
        <div className="ai-message message-box">
          Hello! I'm MedExplain AI. I can help you understand medical reports,
          prescription details, lab values, and general health advice.
          I am not a doctor, so please consult a physician for diagnoses or treatment.

          <p className="mt-2 text-sm text-gray-500">
            <i data-lucide="shield-alert" className="w-4 h-4 inline-block mr-1"></i>
            <b>Disclaimer:</b> I cannot provide diagnoses or replace professional medical advice.
          </p>
        </div>
      </div>

    </div>
  );
}

