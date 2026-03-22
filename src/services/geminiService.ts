import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const getKFCAssistantResponse = async (userMessage: string, cartContext?: string) => {
  try {
    const model = "gemini-3-flash-preview";
    const systemInstruction = `You are a friendly, enthusiastic KFC assistant. 
    Your goal is to help users find menu items, check nutritional info, and suggest upsells.
    Current Cart Context: ${cartContext || 'Empty'}
    Keep responses concise and "Finger Lickin' Good". 
    If a user asks for recommendations, suggest popular items like the Zinger Burger or Original Recipe Chicken.
    Always mention current deals if relevant.`;

    const response = await ai.models.generateContent({
      model,
      contents: userMessage,
      config: {
        systemInstruction,
      },
    });

    return response.text || "I'm having a bit of a brain freeze! How about some Original Recipe chicken while I recover?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The Colonel is busy in the kitchen. Try again in a moment!";
  }
};
