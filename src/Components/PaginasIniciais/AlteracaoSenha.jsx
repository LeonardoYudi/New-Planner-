import { CenterArea } from "../../Sections/Screen.styled";
import {
  AcessArea,
  InputAcess,
  FormAcess,
  ButtonAcess,
} from "../../Sections/Screen.styled";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import api from "../../services/api";

function AlteracaoSenha() {
  const [userInput, setUserInput] = useState({
    codigo: "",
    senha: "",
    confirmacao: "",
  });

  const navigate = useNavigate();

  const updateField = ({ target }) => {
    const input = { ...userInput };
    input[target.name] = target.value.trim();
    setUserInput(input);
  };

  const alterarSenha = async (e) => {
    e.preventDefault();

    if (
      userInput.codigo === "" ||
      userInput.senha === "" ||
      userInput.confirmacao === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    if (userInput.senha !== userInput.confirmacao) {
      alert("As senhas devem ser iguais");
      return;
    }

    try {
      const resp = (await api.post("/users/senhas/alteracoes", userInput)).data;
      if (resp.sucess) {
        alert("Senha alterada com sucesso!");
        navigate("/login");
      } else {
        alert("Ops! Não foi possível alterar a senha");
      }
    } catch (error) {
      alert(
        error?.response?.data?.message ||
          "Ops! Não foi possível alterar a senha"
      );
    }
  };

  return (
    <CenterArea>
      <AcessArea>
        <h2>Recuperação de senha</h2>
        <h3>Informe o código enviado para seu e-mail</h3>
        <h3>e sua nova senha abaixo</h3>
        <FormAcess>
          <InputAcess
            name="codigo"
            onChange={updateField}
            value={userInput.codigo}
            placeholder="Digite seu código"
            type="email"
            required
          ></InputAcess>

          <InputAcess
            name="senha"
            onChange={updateField}
            value={userInput.senha}
            type="password"
            placeholder="Digite sua nova senha"
            required
          />
          <InputAcess
            name="confirmacao"
            onChange={updateField}
            value={userInput.confirmacao}
            type="password"
            placeholder="Digite sua nova senha novamente"
            required
          />
        </FormAcess>
        <ButtonAcess onClick={alterarSenha}>Alterar senha</ButtonAcess>
      </AcessArea>
    </CenterArea>
  );
}

export default AlteracaoSenha;

export const InputAcessName = styled(InputAcess)`
  width: 45%;
  padding: 1rem;
`;

export const NameAcess = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
