import React from "react";

const TextInput = ({ label, required }) => {
    return (
        <div>
            <label>
                {label} {required && "*"}
                <input type="text" />
            </label>
        </div>
    );
};

export default TextInput;
