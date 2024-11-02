// models/ServiceData.js
import mongoose from "mongoose";

const ServiceDataSchema = new mongoose.Schema({
  serviceType: { type: String, required: true },
  clientCount: { type: Number, required: true },
  date: { type: Date, required: true },
  metrics: {
    crisisCalls: { type: Number },
    assessments: { type: Number },
    residentialOccupancy: { type: Number },
  },
  demographics: {
    age: { "18-25": Number, "26-40": Number, "41-60": Number },
    gender: { Male: Number, Female: Number },
  },
}, { timestamps: true });

export default mongoose.model("ServiceData", ServiceDataSchema);
