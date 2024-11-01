import express from "express";
import cors from "cors";
import llmRoutes from "./routes/llmRoutes.js";
import "dotenv/config.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json()); // JSON middleware
app.use("/llm", llmRoutes); // Import routes relevant to LLM

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});