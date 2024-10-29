import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { toast } from "react-toastify";

import { Container, Form, InputContairner, LeftContainer, RightContainer, Title, Link } from "./styles";
import { Button } from "../../components/Button";
import Logo from "../../assets/logo-dev-burger.svg";

export function Register() {
  const schema = yup
    .object({
      name: yup.string().required("O nome é obrigatório"),
      email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
      password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Digite uma senha"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "As senhas não conferem")
        .required("Confirme sua senha"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const { status } = await api.post(
        "/users",
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true,
        }
      );

      if (status === 200 || status === 201) {
        toast.success("Cadastro realizado com sucesso");
      } else if (status === 409) {
        toast.error("Email já cadastrado! Faça login para  continuar!");
      } else {
        throw new Error()
      }
    } catch  (error) {
      toast.error("😭 Falha no Sistema! Tente novamente")
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Title>Criar Conta</Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContairner>
            <label>Nome</label>
            <input type="texxt" {...register("name")} />
            <p>{errors?.name?.message}</p>
          </InputContairner>

          <InputContairner>
            <label>Email</label>
            <input type="email" {...register("email")} />
            <p>{errors?.email?.message}</p>
          </InputContairner>

          <InputContairner>
            <label>Senha</label>
            <input type="password" {...register("password")} />
            <p>{errors?.password?.message}</p>
          </InputContairner>

          <InputContairner>
            <label>Confirmar Senha</label>
            <input type="password" {...register("confirmPassword")} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContairner>

          <Button type="submit">Criar Conta</Button>
        </Form>
        <p>
          Já possui conta? <Link to="/login">Clique aqui.</Link>
        </p>
      </RightContainer>
    </Container>
  );
}
