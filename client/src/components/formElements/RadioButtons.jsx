import React from "react";

const RadioButtons = ({ label, options, required }) => {
    return (
        <div>
            <fieldset>
                <legend>
                    {label} {required && "*"}
                </legend>
                {options.map((option, index) => (
                    <label key={index}>
                        <input type="radio" name="radioGroup" value={option.value} />
                        {option.label}
                    </label>
                ))}
            </fieldset>
        </div>
    );
};

export default RadioButtons;
