import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
function SignUp() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", { email, password, fullName })
      .then((res) => alert(res.data.message))
      .catch((err) => console.warn(err));

    navigate("/login");
  };
  return (
    
    <Container>
    <Navbar></Navbar>
      <FormContainer>
        <h3>Register a New Account</h3>
        <InputContainer>
          <p>FullName</p>
          <input
            type="text"
            placeholder="John Smith"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </InputContainer>
        <InputContainer>
          <p>Email</p>
          <input
            type="email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputContainer>

        <SignUpButton onClick={signup}>Create Account in Reliance Digital</SignUpButton>
      </FormContainer>
      <p>Already Registered?</p>
      <LoginButton onClick={() => navigate("/login")}>
        <u>Login</u>
      </LoginButton>
      <div> <a href="./Login.js"/></div>
      <Footer></Footer>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  min-width: 450px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;



const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;

    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const SignUpButton = styled.button`
  width: 100%;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;

  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;

const LoginButton = styled.button`
  width: 55%;
  height: 35px;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 10px;
  
`;

export default SignUp;
