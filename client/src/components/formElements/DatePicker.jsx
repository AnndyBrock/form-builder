import React from "react";

const DatePicker = ({ label, required }) => {
    return (
        <div>
            <label>
                {label} {required && "*"}
                <input type="date" />
            </label>
        </div>
    );
};

export default DatePicker;
