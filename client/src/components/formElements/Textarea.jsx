import React from "react";

const Textarea = ({ label, required }) => {
    return (
        <div>
            <label>
                {label} {required && "*"}
                <textarea />
            </label>
        </div>
    );
};

export default Textarea;
