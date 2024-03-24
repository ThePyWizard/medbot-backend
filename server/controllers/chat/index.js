import dotenv from 'dotenv'
dotenv.config()

import { GoogleGenerativeAI } from "@google/generative-ai";
//const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const chat = async(req, res) => {
    try {
        const msg = req.body.message
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        let prompt = `You are a highly skilled AI health physician and critical care doctor. A patient has come to you with the following message: "${msg}". Provide a detailed and professional response under 200words that addresses the patient's concerns, offers medical advice, and suggests appropriate next steps or treatments, if applicable. Be thorough and compassionate in your response and also do not bold my responses.`
        const result = await model.generateContent(prompt);
        
        const response = await result.response;
        const output = response.text();

        res.send({reply: output})

    } catch (error) {
        console.log(error)
    }
}

export default chat