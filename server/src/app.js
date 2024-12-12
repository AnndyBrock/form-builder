import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import { connectToDb } from "./config/db.js";

import authRoute from "./routes/auth.route.js";
import formRoute from "./routes/forms.route.js";
import { authenticateToken } from "./middleware/auth.middleware.js";


const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(express.json());

app.use(cookieParser())

app.use("/api/auth", authRoute);
app.use("/api/forms", authenticateToken, formRoute);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDb();
});
