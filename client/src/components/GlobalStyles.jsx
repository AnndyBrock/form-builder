/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
    <Global
        styles={css`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                line-height: 1.6;
                padding: 20px;
            }

            h1,
            h2,
            h3 {
                color: #282c34;
            }

            a {
                text-decoration: none;
            }

            button {
                font-family: inherit;
            }

            input {
                padding: 8px;
                font-size: 16px;
                margin-bottom: 10px;
                width: 100%;
                max-width: 400px;
                border: 1px solid #ccc;
                border-radius: 5px;
                display: block;
                margin: 0 auto;
            }

            input:focus {
                outline: none;
                border-color: #282c34;
            }

            form {
                max-width: 400px;
                margin: 20px auto;
                background: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            button {
                width: 100%;
                max-width: 400px;
                background-color: #282c34;
                color: white;
                border: none;
                border-radius: 5px;
                padding: 10px;
                font-size: 16px;
                cursor: pointer;
                display: block;
                margin: 10px auto;
            }

            button:hover {
                background-color: #405167;
            }

            p {
                text-align: center;
                color: red;
                margin-top: 10px;
            }
        `}
    />
);

export default GlobalStyles;
