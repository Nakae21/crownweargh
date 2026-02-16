import { GoogleGenAI } from "@google/genai";

// The API key must be obtained exclusively from the environment variable process.env.API_KEY.
const apiKey = process.env.API_KEY;

let ai: GoogleGenAI | null = null;

// Only initialize if the key exists to prevent crashing the entire app on load
if (apiKey) {
  try {
    ai = new GoogleGenAI({ apiKey: apiKey });
  } catch (error) {
    console.error("Failed to initialize Gemini client:", error);
  }
}

export const getStyleAdvice = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm currently undergoing maintenance (API Key missing). Please check the Vercel configuration.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are "The CrownStylist", the AI fashion advisor for CrownWear. 
        CrownWear is a premium streetwear brand known for high-quality trucker caps and premium snapback caps. 
        Your tone is premium, confident, slightly urban, and encouraging. Use words like "clean", "fresh", "drip", "essential", "boss move".
        
        Guidelines:
        1. Keep responses concise (under 50 words).
        2. If asked about caps, ask if they prefer the breathable "Trucker" style (mesh back) or the solid "Snapback Cap" look (no net).
        3. Recommend colors that match the user's vibe (e.g., "The White and Lemon Trucker is perfect for a fresh summer look" or "Go for Premium Snapback Black for that stealth wealth vibe").
        4. Suggest "Custom Text" or "Custom Design" on caps for users who want to be unique.
        5. Never break character. You are an expert stylist.
        
        Products available:
        - Trucker Caps (Mesh Back): White/Green, White/Yellow, Black/Yellow, Black, Wine/White, etc.
        - Snapback Caps (No Net): Premium Full Black, Navy, Beige, Olive.
        
        Prices are in GHS (Ghana Cedis).
        `,
      },
    });

    return response.text || "I'm analyzing the latest street trends. Give me a sec.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Our style servers are busy crafting the next big thing. Try again later.";
  }
};