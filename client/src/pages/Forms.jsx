import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../lib/request";

const FormsPage = () => {
    const [forms, setForms] = useState([]); // Список форм
    const [loading, setLoading] = useState(false); // Индикатор загрузки
    const [error, setError] = useState(null); // Ошибка
    const navigate = useNavigate();

    const fetchForms = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/forms/list");
            const data = response.data.forms || []; // Данные находятся в response.data.forms
            setForms(data);
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch forms");
            setForms([]);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchForms();
    }, []);

    return (
        <div>
            <h2>Forms</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <button
                        onClick={() => navigate("/form-builder")}
                        style={{
                            backgroundColor: "green",
                            color: "white",
                            padding: "10px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            marginBottom: "20px",
                        }}
                    >
                        Create New Form
                    </button>
                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            marginTop: "20px",
                        }}
                    >
                        <thead>
                        <tr style={{ backgroundColor: "#f4f4f4" }}>
                            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Form Name</th>
                            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {forms.map((form) => (
                            <tr key={form._id}>
                                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                                    {form.form_name}
                                </td>
                                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                                    <button
                                        style={{
                                            marginRight: "10px",
                                            padding: "5px 10px",
                                            cursor: "pointer",
                                            backgroundColor: "blue",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "5px",
                                        }}
                                        onClick={() => navigate(`/form-builder/${form._id}`)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default FormsPage;
