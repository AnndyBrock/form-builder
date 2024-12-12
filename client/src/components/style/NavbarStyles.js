import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #282c34;
    padding: 10px 20px;
    color: white;
`;

export const NavGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const NavLinks = styled.div`
    display: flex;
    gap: 15px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 16px;

    &:hover {
        text-decoration: underline;
    }
`;

export const LogoutButton = styled.button`
    background-color: #ff6b6b;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #ff4b4b;
    }
`;
