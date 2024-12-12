import Joi from "joi";

export const formSchema = Joi.object({
    form_name: Joi.string().required().messages({
        "string.empty": "Form name is required",
    }),
    form_data: Joi.object().required().messages({
        "object.base": "Form data must be an object",
        "any.required": "Form data is required",
    }),
});
