export default function medexplain() {
  return (
    <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl flex flex-col h-[90vh]">
      
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-500 to-green-500 text-white p-4 rounded-t-xl shadow-lg flex items-center justify-between">
        <h1 className="text-xl font-bold flex items-center">
          <i data-lucide="brain-circuit" className="w-6 h-6 mr-2"></i>
          MedExplain AI
        </h1>
        <span className="text-sm font-light">Healthcare Information Assistant</span>
      </header>

      {/* Chat Window */}
      <div id="chat-window" className="flex-grow p-4 space-y-4">
        <div className="flex justify-start">
          <div className="ai-message message-box">
            Hello! I'm MedExplain AI. I can help you understand medical reports, prescription details,
            lab values, and general health advice. I am not a doctor, so please consult a physician 
            for diagnoses or treatment.

            <p className="mt-2 text-sm text-gray-500">
              <i data-lucide="shield-alert" className="w-4 h-4 inline-block mr-1"></i>
              <b>Disclaimer:</b> I cannot provide diagnoses or replace professional medical advice.
            </p>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200">
        <div id="loading-indicator" className="hidden text-center p-2 text-sm text-teal-600 font-medium">
          <i data-lucide="loader-circle" className="w-5 h-5 inline-block mr-2 animate-spin"></i>
          Analyzing complex data...
        </div>

        <div className="flex space-x-3">
          <input
            type="text"
            id="user-input"
            placeholder="e.g., What does an HbA1c of 7.5 mean?"
            className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none 
                       focus:ring-2 focus:ring-teal-500 transition duration-150"
          />

          <button
            id="send-button"
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-5 rounded-lg 
                       transition duration-150 ease-in-out shadow-md hover:shadow-lg flex items-center 
                       disabled:opacity-50"
          >
            <i data-lucide="send" className="w-5 h-5"></i>
            <span className="ml-2 hidden sm:inline">Send</span>
          </button>
        </div>
      </div>

    </div>
  );
}
