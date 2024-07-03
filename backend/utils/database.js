import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(
    {
        path: './.env'
    }
);

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
    
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

export default databaseConnection;
