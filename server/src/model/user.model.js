import mongoose from "mongoose";
import { compareValue, hashValue } from "../utils/bcrypt.js";

const userSchema = new mongoose.Schema(
    {
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true }
    },
    { timestamps: true }
);

// Instance method to omit password from user object
userSchema.methods.omitPassword = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};

// Create and export the User model
const UserModel = mongoose.model("User", userSchema);
export default UserModel;
