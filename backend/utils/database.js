import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Database connection failed:', error);
    }
};

export default databaseConnection;
