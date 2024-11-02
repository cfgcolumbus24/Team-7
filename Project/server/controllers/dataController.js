// controllers/dataController.js
import ServiceData from "../models/ServiceData.js";

// Get all service data
export const getAllData = async (req, res) => {
  try {
    const data = await ServiceData.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
};

// Create mock data entry
export const createMockData = async (req, res) => {
  try {
    const newData = new ServiceData(req.body);
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(400).json({ message: "Error creating data", error });
  }
};

