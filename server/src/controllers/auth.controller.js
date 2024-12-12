import jwt from "jsonwebtoken";
import UserModel from "../model/user.model.js";
import bcrypt from "bcrypt";
import {OK, BAD_REQUEST, CONFLICT, CREATED, INTERNAL_SERVER_ERROR, UNAUTHORIZED } from "../constant/http.js";
import { oneHourFromNow, thirtyDaysFromNow } from "../utils/date.js";

export const registerHandler = async (req, res) => {
    try {
        // Extract the necessary data from the request body
        const { email, password, confirmPassword } = req.body;

        // Ensure passwords match
        if (password !== confirmPassword) {
            return res.status(BAD_REQUEST).json({ message: "Passwords do not match" });
        }

        // Check if a user with the given email already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(CONFLICT).json({ message: "Email already in use" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Hashed Password:", hashedPassword);

        // Create a new user instance
        const user = new UserModel({ email, password: hashedPassword });

        // Save the user to the database
        await user.save();

        // Respond with the created user object without the password
        res.status(CREATED).json({ user: user.omitPassword() });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
    }
};

export const loginHandler = async (req, res) => {
    try {
        // Extract email and password from the request body
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(BAD_REQUEST).json({ message: "Email and password are required" });
        }

        // Find the user by email
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(UNAUTHORIZED).json({ message: "Invalid email or password" });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(UNAUTHORIZED).json({ message: "Invalid email or password" });
        }

        // Generate JWT tokens
        const accessToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        const refreshToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: "30d" }
        );

        // Set tokens in cookies
        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: oneHourFromNow(),
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: thirtyDaysFromNow(),
        });

        // Respond with the user data
        res.status(OK).json({
            user: user.omitPassword(),
        });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
    }
};
