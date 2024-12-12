import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const HomePage = () => {
    return (
        <Container>
            <Title>Welcome to the Form Builder</Title>
            <Subtitle>Start creating forms by logging in or registering an account.</Subtitle>
        </Container>
    );
};

export default HomePage;
