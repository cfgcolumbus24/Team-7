import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function query(prompt) {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
}