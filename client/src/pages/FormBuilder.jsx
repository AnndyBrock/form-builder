import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../lib/request";
import FormBuilder from "../components/FormBuilder";

const FormBuilderPage = () => {
    const { formId } = useParams();
    const navigate = useNavigate();
    const [selectedForm, setSelectedForm] = useState(null); // Данные формы
    const [loading, setLoading] = useState(false); // Индикатор загрузки
    const [error, setError] = useState(null); // Ошибка

    useEffect(() => {
        const fetchForm = async () => {
            if (!formId) return;
            try {
                setLoading(true);
                const response = await axios.get(`/forms/${formId}`);
                const form = response.data.form;
                setSelectedForm({
                    form_name: form.form_name,
                    form_fields: form.form_data.fields,
                });
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch form");
                setLoading(false);
            }
        };

        fetchForm();
    }, [formId]);

    const saveForm = async (formName, formFields) => {
        try {
            setLoading(true);
            if (formId) {
                await axios.put(`/forms/update/${formId}`, {
                    form_name: formName,
                    form_data: { fields: formFields },
                });
            } else {
                await axios.post("/forms/save", {
                    form_name: formName,
                    form_data: { fields: formFields },
                });
            }
            setLoading(false);
            navigate("/forms"); // Перенаправление обратно на список форм
        } catch (err) {
            setError("Failed to save form");
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>{formId ? "Edit Form" : "Create New Form"}</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <FormBuilder
                    form={selectedForm} // Передаем объект с именем и полями
                    onSave={saveForm}
                />
            )}
        </div>
    );
};

export default FormBuilderPage;
