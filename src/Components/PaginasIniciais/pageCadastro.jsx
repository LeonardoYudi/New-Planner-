import { HeaderPage} from "../../Sections/Screen.styled";
import Cadastro from "./Cadastro";
import Footer from "./Footer";
import Logo from "./Logo"
import NavBar from "./NavBar";


function PageCadastro(){
    return(
        <div>
            <HeaderPage>
                <Logo/>
                <NavBar/>
                <div></div>
            </HeaderPage>
            <Cadastro/>
            <Footer/>
        </div>
    )
}


export default PageCadastro;