import React from "react";

const SelectDropdown = ({ label, options, required }) => {
    return (
        <div>
            <label>
                {label} {required && "*"}
                <select>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default SelectDropdown;
