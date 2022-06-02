import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../../../services/api";
import {HeadersPages, StylePainel} from "../PaginaInicial/PainelUser"
function NewConfigsArea() {
  const [passInput, setPassInput] = useState({
    senhaAtual: "",
    novaSenha: "",
    confirmSenha: "",
  });

  const updateField = ({ target }) => {
    const input = { ...passInput };
    input[target.name] = target.value.trim();
    setPassInput(input);
  };

  const alterarSenha = async (e) => {
    e.preventDefault();

    if (
      passInput.senhaAtual === "" ||
      passInput.novaSenha === "" ||
      passInput.confirmSenha === ""
    ) {
      alert("Preencha todos os campos");
      return;
    }

    if (passInput.novaSenha !== passInput.confirmSenha) {
      alert("As senhas devem ser iguais");
      return;
    }

    try {
      await api.post("/users/senhas", passInput);
      alert("Senha alterada com sucesso!");
    } catch (error) {
      alert("Ops! Não foi possível alterar a senha");
    }
  };

  return (
    <StylePainel>
      <HeadersPages>
        <h2>Configurações</h2>
      </HeadersPages>
      <ContainerConfigs>
        <div className="configCard alterarSenha">
          <h2>Alterar Senha</h2>
          <form>
            <input
              name="senhaAtual"
              onChange={updateField}
              value={passInput.senhaAtual}
              type="password"
              placeholder="Digite sua Senha"
              required
            />
            <input
              name="novaSenha"
              onChange={updateField}
              value={passInput.novaSenha}
              type="password"
              placeholder="Digite sua nova Senha"
              required
            />
            <input
              name="confirmSenha"
              onChange={updateField}
              value={passInput.confirmSenha}
              type="password"
              placeholder="Digite sua nova Senha novamente"
              required
            />
          </form>
          <button onClick={alterarSenha} type="submit">Alterar</button>
        </div>
      </ContainerConfigs>
    </StylePainel>
  );
}

export default NewConfigsArea;

export const ContainerConfigs = styled.div`
  padding: 2rem 4rem;
  background-image: url('https://images.unsplash.com/photo-1606166325695-ce4d64e3195f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  .configCard{
    backdrop-filter: blur(0px) saturate(180%);
    -webkit-backdrop-filter: blur(0px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
  }

  .alterarSenha{
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 1rem 2rem;

    h2{
      font-weight: 500;
      padding: 1rem 0rem;
      border-bottom: 1px solid gray;
    }
    form{
      display: flex;
      flex-direction: column;
      padding: 1rem 0rem;
      input{
        width: 100%;
        padding: 0.7rem;
        outline: 1px;
        border: 1px solid gray;
        border-radius: 12px;
        margin-bottom: 8px;
      }
    }

    button{
      align-self: center;
      width: 80%;
      padding: 0.7rem;
      border: 1px solid gray;
      border-radius: 12px;
      cursor: pointer;
    }
  }
`



