import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Container, Form, InputContairner, LeftContainer, RightContainer, Title } from "./styles";
import { Button } from "../../components/Button";
import Logo from "../../assets/logo-dev-burger.svg";

export function Login() {
  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br />
          Acesse com seu <span>Login e senha.</span>
        </Title>
        <Form>
          <InputContairner>
            <label>Email</label>
            <input type="email" />
          </InputContairner>

          <InputContairner>
            <label>Senha</label>
            <input type="password" />
          </InputContairner>

          <Button>Entrar</Button>
        </Form>
        <p>
          Não possui conta? <a href="">Clique aqui.</a>
        </p>
      </RightContainer>
    </Container>
  );
}
