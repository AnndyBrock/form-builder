import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { Nav, NavGroup, NavLinks, StyledLink, LogoutButton } from "./style/NavbarStyles.js";

const Navbar = () => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <Nav>
            <NavGroup>
                <StyledLink to="/">Home</StyledLink>
                {isAuthenticated && (
                    <>
                        <StyledLink to="/forms">My Forms</StyledLink>
                        <StyledLink to="/form-builder">Create Form</StyledLink>
                    </>
                )}
            </NavGroup>
            <NavLinks>
                {!isAuthenticated ? (
                    <>
                        <StyledLink to="/login">Login</StyledLink>
                        <StyledLink to="/register">Register</StyledLink>
                    </>
                ) : (
                    <>
                        <span>Welcome, {user?.email || "User"}</span>
                        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
                    </>
                )}
            </NavLinks>
        </Nav>
    );
};

export default Navbar;
