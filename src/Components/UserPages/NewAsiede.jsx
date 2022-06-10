import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../../services/api";

function NewAside() {
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
    <AsideUserStyle>
      <LogoAside>
        <span className="first">Plan</span>
        <span className="second">ner</span>
      </LogoAside>
      <div>
        <section>
          <h3>Menu</h3>
          <ul>
            <LiAside>
              <Link to="/paginaPainel">
                <button>Painel</button>
              </Link>
            </LiAside>
            <LiAside>
              <Link to="/filmes">
                <button>Filmes Recomendados</button>
              </Link>
            </LiAside>
            <LiAside>
              <Link to="/configs">
                <button>Configurações</button>
              </Link>
            </LiAside>
          </ul>
        </section>
        <section>
          <h3>Projetos</h3>
          <ul>
            <LiAside>
              <Link to="/configs">
                <button>Configurações</button>
              </Link>
            </LiAside>
          </ul>
        </section>
        <ul>
          <NovoProjeto>
            <Link to="/">
              <button>
                + Novo Projeto
              </button>
            </Link>
          </NovoProjeto>
          <BtnSair>
            <button onClick={sair}>Sair</button>
          </BtnSair>
        </ul>
      </div>
      <p>
        Desenvolvido por
        <br />
        Alexandre e Leonardo
      </p>
    </AsideUserStyle>
  );
}

export default NewAside;

export const LogoAside = styled.h1`
  font-size: 250%;
  cursor: pointer;
  .first {
    color: ${(props) => props.theme.white};
  }
  .second {
    color: ${(props) => props.theme.titleColor2};
  }
`;

export const AsideUserStyle = styled.aside`
  
 
  background-color: #202434;
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    bottom: 1;
  }

  section {
    h3 {
      padding: 0rem 1rem;
      color: #717285;
    }
  }

  p {
    text-align: center;
    font-size: small;
    color: #717285;
  }
`;

export const LiAside = styled.li`
  list-style: none;

  button {
    background: none;
    border: none;
    border-radius: 1rem;
    color: #616277;
    font-weight: 500;
    font-size: 1.3rem;
    padding: 1rem 1rem 1rem 1.7rem;
    text-align: start;
    transition: all 0.3s;
    width: 100%;
    cursor: pointer;
  }

  button:hover {
    background-color: #717285;
    color: white;
  }
`;


export const NovoProjeto = styled.li`
  list-style: none;

  button {
    background: none;
    border: none;
    border-radius: 1rem;
    color: #fff;
    font-weight: 500;
    font-size: 1.3rem;
    padding: 1rem 1rem 1rem 1.7rem;
    text-align: start;
    transition: all 0.3s;
    width: 100%;
    cursor: pointer;
    background-color: #304ccc;
  }

  button:hover {
    background-color: #0a32e6;
  }
`;


export const BtnSair = styled.li`
  list-style: none;

  button {
    background: none;
    border: none;
    border-radius: 1rem;
    color: #616277;
    font-weight: 500;
    font-size: 1.3rem;
    padding: 1rem 1rem 1rem 1.7rem;
    text-align: start;
    transition: all 0.3s;
    width: 100%;
    cursor: pointer;
  }

  button:hover {
    background-color: #970e0e;
    color: white;
  }
`;
