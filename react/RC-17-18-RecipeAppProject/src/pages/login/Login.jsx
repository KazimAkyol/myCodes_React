import React, { useContext } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import { RecipeContext } from "../../context/RecipeProvider";

const Login = () => {
  // Consume islemi

  const { name, setName, password, setPassword } = useContext(RecipeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Varsa database yoksa görevi gören bir yapiya kayit islemi, biz localstorage kullaniyoruz:

    localStorage.setItem("username", name);
    localStorage.setItem("password, password");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src="" />

        <Header> </Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="username"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <StyledInput
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
