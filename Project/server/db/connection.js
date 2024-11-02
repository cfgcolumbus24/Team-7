import { MongoClient, ServerApiVersion} from 'mongodb';
import "dotenv/config.js";

const URI = process.env.MONGODB_URI || ""
const client = new MongoClient(URI, {
    serverApi: {
        version: ServerApiVersion.v1,

        // Client enforces adherence to API rules,
        // meaning that if a functionality or feature 
        // that is outside of the API rules known realm,
        // an error will be thrown
        strict: true,

        // Throws errors if updates are recommended
        deprecationErrors: true,
    },
});

// Pinging for admin database
try {
    //  Connect client (the database) to the server
    await client.connect();
    // Send ping to confirm a successful connection
    await client.db("cfgTesting").command({ ping: 1 });
    console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
    );
} catch (error) {
    console.error(err);
}

let db = client.db("cfgTesting");

export default db;


