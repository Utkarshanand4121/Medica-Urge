import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Database connection successfully at ${mongoose.connection.host}`.bgGreen.white);
    } catch (error) {
        console.log(`MONGO DB issue ${error}`.bgGreen.white);
        process.exit(1);
    }
}

export default connectDB;