import FormModel from "../model/form.model.js";

/**
 * Save a new form
 */
export const saveForm = async (req, res) => {
    try {
        const { form_name, form_data } = req.body;

        // Create a new form document
        const form = new FormModel({ form_name, form_data });

        // Save the form to the database
        await form.save();

        res.status(201).json({ message: "Form saved successfully", form });
    } catch (error) {
        console.error("Error saving form:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

/**
 * Fetch a form by ID
 */
export const fetchForm = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the form by ID
        const form = await FormModel.findById(id);
        if (!form) {
            return res.status(404).json({ message: "Form not found" });
        }

        res.status(200).json({ form });
    } catch (error) {
        console.error("Error fetching form:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

/**
 * Fetch all forms
 */
export const fetchForms = async (req, res) => {

    console.log(1112)
    try {
        // Retrieve all forms
        const forms = await FormModel.find();
        res.status(200).json({ forms });
    } catch (error) {
        console.error("Error fetching forms:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

/**
 * Update a form by ID
 */
export const updateForm = async (req, res) => {
    try {
        const { id } = req.params;
        const { form_name, form_data } = req.body;

        // Update the form document
        const updatedForm = await FormModel.findByIdAndUpdate(
            id,
            { form_name, form_data },
            { new: true } // Return the updated document
        );

        if (!updatedForm) {
            return res.status(404).json({ message: "Form not found" });
        }

        res.status(200).json({ message: "Form updated successfully", form: updatedForm });
    } catch (error) {
        console.error("Error updating form:", error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};
