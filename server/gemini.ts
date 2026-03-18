'use server';

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! })

const model = "gemini-3-flash-preview"

export default async function generateSummary(text: string) {
    if (text.trim() === '') return "Please enter prompt"

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: `Please summarize these notes for me. Text: \n${text}\n`,
            config: {
                systemInstruction: 'You are a professional note summarizer and your job is to summarize the text given by the user'
            }
        })

        return response.text
    } catch (error) {
        console.error(error)
        return "Error, check API Key"
    }
}