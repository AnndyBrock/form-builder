import styled from "@emotion/styled";

export const FormBuilderContainer = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
`;

export const Sidebar = styled.div`
    flex: 1;
    background-color: #f4f4f4;
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Canvas = styled.div`
    flex: 2;
    background-color: #ffffff;
    padding: 10px;
    border: 1px solid #ddd;
    min-height: 300px;
    position: relative;
`;

export const Element = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    background-color: ${(props) => (props.isSelected ? "#d3f9d8" : "#e8e8e8")};
    border: 1px solid ${(props) => (props.isSelected ? "#76c7c0" : "#ccc")};
    border-radius: 4px;
    cursor: pointer;
    position: relative;
`;

export const DeleteButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    padding: 5px;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
`;

export const PropertiesPanel = styled.div`
    flex: 1;
    background-color: #f9f9f9;
    padding: 10px;
    border: 1px solid #ddd;
`;

export const SaveButton = styled.button`
    margin-top: 20px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 15px;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

export const FormNameInput = styled.input`
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
