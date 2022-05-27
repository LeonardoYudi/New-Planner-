import { CenterArea } from "../../Sections/Screen.styled";
import {
  AcessArea,
  InputAcess,
  FormAcess,
  ButtonAcess,
  AcessP,
  ButtonLogCad,
} from "../../Sections/Screen.styled";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import api from "../../services/api";

function Cadastro() {
  const [userInput, setUserInput] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
  });

  const navigate = useNavigate();

  const updateField = ({ target }) => {
    const input = { ...userInput };
    input[target.name] = target.value.trim();
    setUserInput(input);
  };

  const cadastrar = async (e) => {
    e.preventDefault();
    if (userInput.senha !== userInput.confirmarSenha) {
      alert("As senhas devem ser iguais");
      return;
    }

    const resp = await api.post("/users/cadastros", userInput);
    localStorage.setItem("token", resp.data?.token);
    navigate("/pagina");
  };

  return (
    <CenterArea>
      <AcessArea>
        <h2>Cadastro</h2>
        <h3>Para ter acesso aos nossos serviços</h3>
        <h3>efetue seu cadastro</h3>
        <FormAcess>
          <NameAcess>
            <InputAcessName
              name="nome"
              onChange={updateField}
              value={userInput.nome}
              placeholder="Nome"
              type="text"
              required
            ></InputAcessName>
            <InputAcessName
              name="sobrenome"
              onChange={updateField}
              value={userInput.sobrenome}
              placeholder="Sobrenome"
              type="text"
              required
            ></InputAcessName>
          </NameAcess>
          <InputAcess
            name="email"
            onChange={updateField}
            value={userInput.email}
            placeholder="Digite seu Email"
            type="email"
            required
          ></InputAcess>
          <InputAcess
            name="senha"
            onChange={updateField}
            value={userInput.senha}
            placeholder="Digite sua Senha"
            type="password"
            required
          ></InputAcess>
          <InputAcess
            name="confirmarSenha"
            onChange={updateField}
            value={userInput.confirmarSenha}
            placeholder="Confirme sua Senha"
            type="password"
            required
          ></InputAcess>
        </FormAcess>
        <ButtonAcess onClick={cadastrar}>Cadastrar</ButtonAcess>
        <AcessP>Já possui conta ?</AcessP>
        <Link to="/login">
          <ButtonLogCad>Entrar Agora</ButtonLogCad>
        </Link>
      </AcessArea>
    </CenterArea>
  );
}

export default Cadastro;

export const InputAcessName = styled(InputAcess)`
  width: 45%;
  padding: 1rem;
`;

export const NameAcess = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
