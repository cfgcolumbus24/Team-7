// app.js
import express from "express";
import cors from "cors";
import llmRoutes from "./routes/llmRoutes.js";
import "dotenv/config.js";
import dataRoutes from "./routes/dataRoutes.js";
import db from "./db/connection.js";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json()); // JSON middleware
app.use("/llm", llmRoutes); // Import routes relevant to LLM
app.use(dataRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
