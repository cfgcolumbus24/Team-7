// routes/dataRoutes.js
import express from "express";
import { getAllData, createMockData } from "../controllers/dataController.js";
import db from "../db/connection.js";

const router = express.Router();

router.get("/data", getAllData);     // Get all data
router.post("/data", createMockData); // Add mock data

export default router;
