import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
    return (
      <DisplayNav>
        <Link to="/"><NavButton>Inicio</NavButton></Link>
        <Link to="/lembretes"><NavButton>Documentação</NavButton></Link>
        <Link to="/paginaPainel"><NavButton>Página</NavButton></Link>
        <Link to="/cadastro"><NavButton>Cadastrar</NavButton></Link>
        <Link to="/login"><NavButton>Login</NavButton></Link>
      </DisplayNav>
    );
}

export default NavBar;

export const DisplayNav = styled.nav`
  display: flex;
`
export const NavButton = styled.button`
  color: ${(props)=>props.theme.colorLinks};
  background: none;
  border: none;
  padding: 1rem 2rem;
  margin-right: 1rem;
  font-size: 140%;
  cursor: pointer;
  position: relative;

  :after {
    content: "";
    position: absolute;
    background-color: ${(props) => props.theme.titleColor2};
    height: 4px;
    width: 0%;
    left: 0;
    bottom: -1px;
    transition: all 0.3s;
  }

  :hover:after {
    width: 100%;
  }
`
