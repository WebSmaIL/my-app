import React from "react";
import styled from "styled-components";
import LoginForm from "./loginForm/LoginForm";

const StyledLogin = styled.div`
    max-width: fit-content;
    margin: 0 auto;
    border: 1px solid #bfbfbf;
    background: #e1e1e1;
    border-radius: 10px;
    padding: 5px 30px 10px 30px;
`;

const Sh1 = styled.h1`
    font-size: 50px;
    text-align: center;
    margin: 0 0 10px 0;
    color: #00acba;
`;

const Login = (props) => {
    return (
        <StyledLogin>
            <Sh1>LOGIN</Sh1>
            <LoginForm />
        </StyledLogin>
    );
};

export default Login;
