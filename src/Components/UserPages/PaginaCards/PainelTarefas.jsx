import styled from "styled-components";
import { HeadersPages, StylePainel } from "../PaginaInicial/PainelUser";
import TarefaList from "./TarefaList";
import api from "../../../services/api";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function PainelTarefa() {
  const [projects, setProjects] = useState([
    { id: -1, nome: "Minhas tarefas" },
  ]);
  const [idAtual, setIdAtual] = useState(projects[0].id);

  const navigate = useNavigate();

  useEffect(() => {
    buscarProjects();
  }, []);

  const logoutAux = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const buscarProjects = async () => {
    let _projects = [];

    try {
      _projects = (await api.get(`/projects`)).data;
    } catch (error) {
      if (error.response.status === 401) {
        logoutAux();
        return;
      }
      navigate("/paginaPainel");
    }

    setIdAtual(_projects[0].id);
    setProjects(_projects);
  };

  const novoProjeto = async () => {
    const nome = window.prompt("Nome");
    if (nome === null) return;

    const _projects = projects.concat();

    const project = {
      nome,
    };

    let novoProjeto;
    try {
      novoProjeto = (await api.post("/projects", project)).data;
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Não foi possível criar projeto");
      return;
    }
    project.id = novoProjeto.id;

    _projects.push(project);
    setProjects(_projects);
  };

  const adicionarMembro = async () => {
    const email = window.prompt("E-mail");
    if (email === null) return;

    try {
      await api.post("/projects/members", { email, projectId: idAtual });
    } catch (error) {
      alert(error.response?.data?.message);
      return;
    }
  };

  const removerMembro = async () => {
    const email = window.prompt("E-mail");
    if (email === null) return;

    try {
      await api.delete("/projects/members", { email, projectId: idAtual });
    } catch (error) {
      alert(error.response?.data?.message);
      return;
    }
  };

  return (
    <StylePainel>
      <HeadersPages>
        <Tarefas>
        <h2>Projetos</h2>
        {projects.map((p) => (
          <button
            onClick={() => {
              setIdAtual(p.id);
            }}
          >
            {p.nome}
          </button>
        ))}
        </Tarefas>
        <Btns>
          <button onClick={adicionarMembro}>Convidar membro</button>
          <button onClick={removerMembro}>Remover membro</button>
          <button onClick={novoProjeto}>Novo Projeto</button>
          <button>Remover Projeto</button>  
        </Btns>
      </HeadersPages>
      <ContainerProjetos>
        <TarefaList id={idAtual} />
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

export const Btns = styled.div`
   button{
      cursor: pointer;
      padding: 1rem 1.7rem;
      border:none;
      border-radius: 1.3rem;
      font-weight: bolder;
      transition: all 0.3s;
      margin-left: 0.5rem;
    }
    button:hover{
        background-color: #7cb4cc;
    }
`

export const Tarefas = styled.div`
  display: flex;
  align-items: baseline;
  h2{
    margin-right: 1.3rem;
  }
  button{
    padding: 1rem 1.7rem;
    border: none;
    margin-right: 1rem;
    cursor: pointer;
    border-radius: 0.5rem;

    transition: all 0.3s;
  }

  button:hover{
    background-color: #2b8ca9;
  }
`