import { DisplayNav,NavButton } from "../Sections/Screen";
import { Link } from "react-router-dom";

function NavBar() {
    return (
      <DisplayNav>
        <Link to="/"><NavButton>Inicio</NavButton></Link>
        <Link to="/userPage"><NavButton>Documentação</NavButton></Link>
        <Link to="/pagina"><NavButton>Página</NavButton></Link>
        <Link to="/cadastro"><NavButton>Cadastrar</NavButton></Link>
        <Link to="/login"><NavButton>Login</NavButton></Link>
      </DisplayNav>
    );
}

export default NavBar;



