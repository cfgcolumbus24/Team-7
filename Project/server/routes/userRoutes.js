import express from "express";
import db from "../db/connection.js";
import bcrypt from "bcrypt";

const router = express.Router();

// Route to register a new user
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 7); // Encrypt password
    
    const collection = db.collection("userLoginInfoRecord");
    const existingUser = await collection.findOne({ username });
    
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    
    await collection.insertOne({ username, password: hashedPassword });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

// Route to login a user
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const collection = db.collection("userLoginInfoRecord");
    const user = await collection.findOne({ username });
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Error logging in" });
  }
});

export default router;
