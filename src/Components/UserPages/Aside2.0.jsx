import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useEffect, useState } from "react";

function Aside() {

  const navigate = useNavigate();

  const logoutAux = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const sair = async () => {
    try {
      await api.post("/users/logout");
      logoutAux();
    } catch (error) {
      if (error.response.status === 401) {
        logoutAux();
      }
    }
  };

  return (
    <AsideStyle>
      <Logo>
        <span className="first">Plan</span>
        <span className="second">ner</span>
      </Logo>
      <MenuItens>
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/paginaPainel" className="link">
              <button>Painel</button>
            </Link>
          </li>
          <li>
            <Link to="/filmes" className="link">
              <button>Filmes</button>
            </Link>
          </li>
          <li>
            <Link to="/painelConfig" className="link">
              <button>Configurações</button>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={`/painelTarefa`} className="link">
              <button>
                <h2>Tarefas</h2>
              </button>
            </Link>
          </li>
        </ul>
      </MenuItens>
      <MenuItensBottom className="bottom">
        {/*<button className="novoProjeto" onClick={novoProjeto}>
          Novo Projeto
        </button>*/}
        <button onClick={sair} className="sair">
          Sair
        </button>
      </MenuItensBottom>
    </AsideStyle>
  );
}

export default Aside;

export const AsideStyle = styled.aside`
  width: 16%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 9px 3px #000000;
`;

export const Logo = styled.h1`
  font-size: 250%;
  padding: 2rem 0rem 6rem 0rem;
  cursor: pointer;
  .first {
    color: ${(props) => props.theme.titleColor1};
  }
  .second {
    color: ${(props) => props.theme.titleColor2};
  }
`;

export const MenuItens = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem;
  ul {
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  li {
    list-style: none;
    margin-bottom: 0.7rem;
    width: 80%;
  }

  li button {
    width: 100%;
    text-decoration: none;
    font-size: 1.3rem;
    padding: 1rem 0rem 1rem 0.4rem;
    border-radius: 0.5rem;
    border: none;
    background: none;
    text-align: start;
    cursor: pointer;
  }

  li button:hover {
    background-color: #abaaae;
    color: white;
  }

  h2 {
    color: #acaaaa;
    font-weight: 500;
    font-size: 1.3rem;
    margin-left: 1rem;
  }
`;

export const MenuItensBottom = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  button {
    width: 80%;
    padding: 1.3rem 2rem;
    text-align: start;
    margin-bottom: 2rem;
    border-radius: 0.3rem;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
  }

  .novoProjeto {
    color: #fff;
    background-color: #304ccc;
  }

  .sair {
    color: #fff;
    background-color: #cc304c;
  }
`;
