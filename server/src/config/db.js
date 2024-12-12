import * as mongoose from "mongoose";

export const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Successfully connected to database");
    } catch (error) {
        console.log("Could not connect to DB " + error);
        process.exit(1);
    }
};
