import React from "react";

const Checkbox = ({ label, required }) => {
    return (
        <div>
            <label>
                <input type="checkbox" />
                {label} {required && "*"}
            </label>
        </div>
    );
};

export default Checkbox;
