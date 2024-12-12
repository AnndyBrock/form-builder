import Joi from "joi";

export const userRegisterSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.email": "Email must be a valid email address",
        "string.empty": "Email is required",
    }),
    password: Joi.string().min(6).required().messages({
        "string.min": "Password must be at least 6 characters long",
        "string.empty": "Password is required",
    }),
    confirmPassword: Joi.any().valid(Joi.ref("password")).required().messages({
        "any.only": "Passwords must match",
        "any.required": "Confirm password is required",
    }),
});
