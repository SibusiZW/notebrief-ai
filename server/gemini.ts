'use server';
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY!

const ai = new GoogleGenAI({ apiKey: apiKey })

export default async function generateSummary(text: string) {
    if (text.trim() == "") return "Please enter text"

    const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: `Hi, Summarize these notes for me:\n ${text} \n`,
        config: {
            systemInstruction: "You are a professional text summarizer and your task is to summarize the text given by the user to a shorter and more understandable format"
        }
    })

    return response.text
}