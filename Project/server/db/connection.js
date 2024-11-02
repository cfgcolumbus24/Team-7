import { MongoClient, ServerApiVersion } from "mongodb";

import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const URI = process.env.ATLAS_URI || ""; // MongoDB connection URI from .env
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectToDatabase() {
  try {
    await client.connect(); // Connect the client to the server
    db = client.db("userLoginInfo"); // Connect to the specific database
    console.log("Successfully connected to MongoDB!");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

connectToDatabase(); // Call the function to initiate connection

export default db; // Export the connected database instance
