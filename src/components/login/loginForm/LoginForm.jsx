import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const StyledForm = styled.form`
    display: grid;
    justify-content: center;
    padding: 10px 15px;
    border-radius: 5px;
    background: #cecece;
    border: 1px solid #bfbfbf;
    margin: 0;
`;

const StyledInput = styled.input`
    display: block;
    border: none;
    padding: 5px 7px;
    font-size: 16px;
    margin-bottom: 10px;
    border-radius: 3px;
    border: 1px solid #00acba;
    &:focus {
        outline: none;
    }
`;

const StyledSubmitBtn = styled.button`
    display: block;
    border: none;
    padding: 10px 15px;
    font-size: 16px;
    margin: 10px auto;
    border-radius: 20px;
    width: 100%;
    color: #fff;
    background: #00acba;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
        background: #008a96;
    }
`;

const StyledSpan = styled.span`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
`;

const StyledErrorMessage = styled(StyledSpan)`
    color: #ff0000;
`;

export default function LoginForm(props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ mode: "onChange" });

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <div>
                <span>
                    {errors.name ? (
                        <StyledErrorMessage>
                            {errors.name.message}
                        </StyledErrorMessage>
                    ) : (
                        <StyledSpan>Введите ваше имя:</StyledSpan>
                    )}
                </span>
                <StyledInput
                    {...register("name", {
                        required: "Имя - обязательное поле",
                    })}
                    type="text"
                    placeholder="Enter your name..."
                />
            </div>
            <div>
                <span>
                    {errors.email ? (
                        <StyledErrorMessage>
                            {errors.email.message}
                        </StyledErrorMessage>
                    ) : (
                        <StyledSpan>Введите ваш Email:</StyledSpan>
                    )}
                </span>
                <StyledInput
                    {...register("email", {
                        required: "Email - обязательное поле",
                        pattern: {
                            message: "Введите правильный email!!!",
                            value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                        },
                    })}
                    placeholder="Enter your email..."
                />
            </div>
            <div></div>
            <div>
                <StyledSubmitBtn>Войти</StyledSubmitBtn>
            </div>
        </StyledForm>
    );
}

// const ReduxLoginForm = reduxForm({form: "login"})(LoginForm);
// export default ReduxLoginForm;

// onSubmit={e=>props.handleSubmit()}
/* <Field placeholder={"Login"} name={"login"} component={"input"}/> */
/* <Field placeholder={"Password"} name={"password"} component={"input"}/> */
/* <Field component={"input"} name={"rememberMe"} type="checkbox"/>remember me */
