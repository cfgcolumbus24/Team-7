// app.js
import express from "express";
import cors from "cors";
import "dotenv/config";
import dataRoutes from "./routes/dataRoutes.js";
import db from "./db/connection.js";

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(dataRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
