import mongoose from "mongoose";
import config from "config";
const db = config.get("mongoURI");

const connectDB = async () => { 
try {
    await mongoose.connect(db, {
        useNewUrlParser: true
    });
    console.log("MongoDB connected...")
} catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1)
}
}

export default connectDB;