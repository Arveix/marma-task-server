import dotenv from 'dotenv';

dotenv.config();

import { MongoClient, MongoClientOptions } from 'mongodb';
import { attachDatabasePool } from '@vercel/functions';

const options = {
    appName: "devrel.vercel.integration",
    maxIdleTimeMS: 5000
};
const connectDB = new MongoClient(process.env.MONGODB_URI, options);

// Attach the client to ensure proper cleanup on function suspension
attachDatabasePool(connectDB);

// Export a module-scoped MongoClient to ensure the client can be shared across functions.
export default connectDB; 