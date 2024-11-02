import express from 'express';
import { query } from '../controllers/llmController.js';

const router = express.Router();

router.post("/query", async (req, res) => {
    try {
        let result = await query(req.body.prompt);
        res.end(JSON.stringify(result));
    } catch (err) {
        console.error(err);
        res.status(500).send("Error")
    }
})

export default router;