import { DisplayNav,NavButton } from "../Sections/Screen";
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <DisplayNav>
        <Link to="/"><NavButton>Inicio</NavButton></Link>
        <NavButton>Documentação</NavButton>
        <NavButton>Página</NavButton>
        <Link to="/cadastro"><NavButton>Cadastrar</NavButton></Link>
        <Link to="/login"><NavButton>Login</NavButton></Link>
      </DisplayNav>
    );
}

export default NavBar;



