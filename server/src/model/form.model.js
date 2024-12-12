import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
    {
        form_name: { type: String, unique: true, required: true },
        form_data: { type: mongoose.Schema.Types.Mixed, required: true }
    },
    { timestamps: true }
);

// Create and export the User model
const FormModel = mongoose.model("Form", formSchema);
export default FormModel;
