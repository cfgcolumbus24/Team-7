import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config.js";
import db from "../db/connection.js";

const columns = "Timestamp,Gender,Country,Occupation,self_employed,family_history,treatment,Days_Indoors,Growing_Stress,Changes_Habits,Mental_Health_History,Mood_Swings,Coping_Struggles,Work_Interest,Social_Weakness,mental_health_interview,care_options";
const sample = "8/27/2014 11:29,Female,United States,Corporate,,No,Yes,1-14 days,Yes,No,Yes,Medium,No,No,Yes,No,Not sure"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_KEY);
const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash", 
    systemInstruction: "Given the csv columns " + columns + "; and the sample data " + sample +"; give me a mongodb query for anything I ask for. Do not give me anything besides the query text.",
});


export async function query(prompt) {
    const result = await model.generateContent(prompt);
    let query = result.response.text();
    const lines = query.split('\n');
    db.collection = db.collection("patients");
    
    // Remove the first and last lines
    lines.shift(); 
    lines.pop();  
    query = lines.join('\n'); // Join the remaining lines back into a string

    let queryResult = await eval(query); // query contains a mongodb query. Eval to execute query.
    console.log(queryResult); 
    return queryResult
}