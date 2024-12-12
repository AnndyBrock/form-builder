import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import {
    FormBuilderContainer,
    Sidebar,
    Canvas,
    Element,
    DeleteButton,
    PropertiesPanel,
    SaveButton,
    FormNameInput,
} from "./style/FormBuilderStyles.js";

const FormBuilder = ({ form, onSave }) => {
    const [formFields, setFormFields] = useState([]); // Поля формы
    const [formName, setFormName] = useState(""); // Имя формы
    const [selectedFieldId, setSelectedFieldId] = useState(null); // Выбранное поле для редактирования

    // Инициализация текущей формы
    useEffect(() => {
        if (form) {
            setFormName(form.form_name); // Устанавливаем имя формы
            setFormFields(form.form_fields || []); // Устанавливаем поля формы
        } else {
            setFormName("");
            setFormFields([]);
        }
    }, [form]);

    const selectedField = formFields.find((field) => field.id === selectedFieldId);

    const handlePropertyChange = (property, value) => {
        setFormFields((prevFields) =>
            prevFields.map((field) =>
                field.id === selectedFieldId ? { ...field, [property]: value } : field
            )
        );
    };

    const handleDeleteField = (id) => {
        setFormFields((prevFields) => prevFields.filter((field) => field.id !== id));
        if (id === selectedFieldId) {
            setSelectedFieldId(null); // Сбрасываем выбранное поле
        }
    };

    const handleDeleteOption = (optionIndex) => {
        if (selectedField) {
            const updatedOptions = selectedField.options.filter((_, index) => index !== optionIndex);
            handlePropertyChange("options", updatedOptions);
        }
    };

    const saveCurrentForm = () => {
        if (!formName.trim()) {
            alert("Please provide a name for the form.");
            return;
        }

        onSave(formName, formFields); // Сохраняем или обновляем форму
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <FormBuilderContainer>
                {/* Sidebar */}
                <Sidebar>
                    <h3>Form Elements</h3>
                    {[
                        { id: "1", type: "TextInput", label: "Text Input" },
                        { id: "2", type: "Textarea", label: "Textarea" },
                        { id: "3", type: "SelectDropdown", label: "Select Dropdown" },
                        { id: "4", type: "Checkbox", label: "Checkbox" },
                        { id: "5", type: "RadioButtons", label: "Radio Buttons" },
                        { id: "6", type: "DatePicker", label: "Date Picker" },
                        { id: "7", type: "FileUpload", label: "File Upload" },
                    ].map((element) => (
                        <Element
                            key={element.id}
                            onClick={() =>
                                setFormFields([
                                    ...formFields,
                                    { ...element, id: `${element.id}-${Date.now()}`, required: false, options: [] },
                                ])
                            }
                        >
                            {element.label}
                        </Element>
                    ))}
                </Sidebar>

                {/* Canvas */}
                <Canvas>
                    <FormNameInput
                        type="text"
                        placeholder="Form Name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                    />
                    <h3>Form Builder</h3>
                    {formFields.map((field) => (
                        <Element
                            key={field.id}
                            isSelected={field.id === selectedFieldId}
                            onClick={() => setSelectedFieldId(field.id)}
                        >
                            {field.label}
                            <DeleteButton onClick={() => handleDeleteField(field.id)}>X</DeleteButton>
                        </Element>
                    ))}
                    <SaveButton onClick={saveCurrentForm}>
                        {form ? "Update Form" : "Save Form"}
                    </SaveButton>
                </Canvas>

                {/* Properties Panel */}
                {selectedField && (
                    <PropertiesPanel>
                        <h3>Edit Properties</h3>
                        <div>
                            <label>
                                Label:
                                <input
                                    type="text"
                                    value={selectedField.label}
                                    onChange={(e) => handlePropertyChange("label", e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Required:
                                <input
                                    type="checkbox"
                                    checked={selectedField.required}
                                    onChange={(e) => handlePropertyChange("required", e.target.checked)}
                                />
                            </label>
                        </div>
                        {(selectedField.type === "SelectDropdown" ||
                            selectedField.type === "RadioButtons") && (
                            <div>
                                <h4>Options</h4>
                                {selectedField.options.map((option, index) => (
                                    <div key={index}>
                                        <label>
                                            Option Label:
                                            <input
                                                type="text"
                                                value={option.label}
                                                onChange={(e) => {
                                                    const newOptions = [...selectedField.options];
                                                    newOptions[index].label = e.target.value;
                                                    handlePropertyChange("options", newOptions);
                                                }}
                                            />
                                        </label>
                                        <button
                                            style={{
                                                marginLeft: "10px",
                                                padding: "5px 10px",
                                                backgroundColor: "red",
                                                color: "white",
                                                border: "none",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                            }}
                                            onClick={() => handleDeleteOption(index)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                                <button
                                    onClick={() =>
                                        handlePropertyChange("options", [
                                            ...(selectedField.options || []),
                                            { label: "New Option" },
                                        ])
                                    }
                                >
                                    Add Option
                                </button>
                            </div>
                        )}
                    </PropertiesPanel>
                )}
            </FormBuilderContainer>
        </DndProvider>
    );
};

export default FormBuilder;
