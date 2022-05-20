import { HeaderPage} from "../../Sections/Screen.styled";
import Footer from "./Footer";
import Login from "./Login";
import Logo from "./Logo"
import NavBar from "./NavBar";


function PageLogin(){
    return(
        <div>
            <HeaderPage>
                <Logo/>
                <NavBar/>
                <div></div>
            </HeaderPage>
            <Login/>
            <Footer/>
        </div>
    )
}


export default PageLogin;