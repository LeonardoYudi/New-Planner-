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

function Recuperacao() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const updateField = ({ target }) => {
    setEmail(target.value);
  };

  const recuperarSenha = async (e) => {
    if(email === "") {
      alert("Preencha seu e-mail");
      return
    }

    try {
      await api.post("users/senhas/solicitacoes", { email });
    } catch (error) {
      console.log(error)
      alert(error?.response?.data?.message);
    }

    localStorage.setItem("email", email);
    navigate("/alteracao");
  };

  return (
    <CenterArea>
      <AcessArea>
        <h2>Recuperação de senha</h2>
        <h3>Para recuperação sua senha informe</h3>
        <h3>seu e-mail abaixo</h3>
        <FormAcess>
          <InputAcess
            name="email"
            onChange={updateField}
            value={email}
            placeholder="Digite seu Email"
            type="email"
            required
          ></InputAcess>
        </FormAcess>
        <ButtonAcess onClick={recuperarSenha}>Recuperar senha</ButtonAcess>
      </AcessArea>
    </CenterArea>
  );
}

export default Recuperacao;

export const InputAcessName = styled(InputAcess)`
  width: 45%;
  padding: 1rem;
`;

export const NameAcess = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
