import express from 'express';
import { query } from '../controllers/llmController.js';

const router = express.Router();

// router.post("/query", async (req, res) => {
//     try {
//         let result = await query(req.body.prompt);
//         res.end(JSON.stringify(result));
//     } catch (err) {
//         console.error(err);
//         res.status(500).send("Error ")
//     }
// })

router.post("/query", (req, res) => {
    const { prompt } = req.body; 
    console.log("Received Request:", prompt);
    res.send(prompt || "hello"); 
});

export default router;