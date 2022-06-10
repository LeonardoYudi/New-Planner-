import styled from "styled-components";
import { HeadersPages, StylePainel } from "../PaginaInicial/PainelUser";
import TarefaList from "./TarefaList";
import api from "../../../services/api";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function PainelTarefa() {
  const [params, setParams] = useSearchParams();
  /*const [projectId, setProjectId] = useState(-1);
  const [project, setProject] = useState({ id: -1, nome: "" });*/

  const navigate = useNavigate();

  /*const buscarProject = async () => {
    let _project = null;

    try {
      _project = (await api.get(`/projects/${projectId ?? -1}`)).data;
    } catch (error) {
      navigate("/paginaPainel");
    }

    setProject(_project);
  };*/

  return (
    <StylePainel>
      <HeadersPages>
        <h2>Tarefas</h2>
      </HeadersPages>
      <ContainerProjetos>
        <TarefaList />
      </ContainerProjetos>
    </StylePainel>
  );
}

export default PainelTarefa;

export const ContainerProjetos = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 4rem;
  background-image: url("https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
