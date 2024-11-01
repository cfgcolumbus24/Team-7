// routes/dataRoutes.js
import express from "express";
import { getAllData, createMockData } from "../controllers/dataController.js";

const router = express.Router();

router.get("/data", getAllData);          // Get all data
router.post("/data", createMockData);      // Add mock data

export default router;
