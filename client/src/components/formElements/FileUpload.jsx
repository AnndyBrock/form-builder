import React from "react";

const FileUpload = ({ label, required }) => {
    return (
        <div>
            <label>
                {label} {required && "*"}
                <input type="file" />
            </label>
        </div>
    );
};

export default FileUpload;
