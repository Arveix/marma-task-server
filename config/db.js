import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        // await mongoose.connect(`${process.env.MONGODB_URI}/marma_task_db`);
        await mongoose.connect(`mongodb+srv://Vercel-Admin-marma-task-db:7DyHmeUL7kUo5aKs@marma-task-db.dwqmtll.mongodb.net/marma_task_db`);
        console.log('MongoDB connected');
        console.log("Connected DB:", mongoose.connection.name);
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

export default connectDB;
