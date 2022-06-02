import styled from "styled-components";
import Clock from "./Clock";
import PostsList from "./PostsList";
import api from "../../../services/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NewPostList from "./NewPostList";
import Calendario from "./Calendario";

function NewCardSpace() {
  const [user, setUser] = useState({
    nome: "",
  });

  const buscarUsuario = async () => {
    try {
      const resp = (await api.get("/users")).data;
      setUser({nome: resp.nome});
    } catch (error) {
      /*alert(
        error.response?.data?.message ||
          "Ops! Não foi possível buscar usuário logado"
      );*/
    }
  };

  useEffect(() => {
    buscarUsuario();
  },[]);

  return (
    <StyleCardSpace>
      <StyleSection1>
        <h2 id="name">Olá, {user.nome}!</h2>
      </StyleSection1>
      <StyleSection2>
        <NewPostList/>
      </StyleSection2>
    </StyleCardSpace>
  );
}

export default NewCardSpace;

export const StyleCardSpace = styled.section`
  width: 85%;
  height: 100%;
  background-color: ${(props) => props.theme.userWork};
  transition: all 0.7s;
  display: grid;
  grid-template-rows: 10% 90%;
`;

export const StyleSection1 = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 2px solid lightgray;
  padding: 2rem;
  h2 {
    font-weight: 500;
  }
`;

export const StyleSection2 = styled.section`
  display: grid;
  width: 100%;
`;
