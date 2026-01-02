import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log("✅ Mongoose connected")
    } catch (error) {
        console.log("Error while connecting mongoose", error)
    }
}