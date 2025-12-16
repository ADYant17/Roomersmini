
const API_KEY = "AIzaSyCNW2MdBaQpwlsK6t-2MSEmb4q8Bglm4ko" ;
const MODEL = "gemini-2.5-flash-preview-09-2025";

export async function sendToGemini(prompt) {
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

  const payload = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  };

  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
  } catch (err) {
    return "Error contacting AI service.";
  }
}
