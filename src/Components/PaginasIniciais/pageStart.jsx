import { Main } from "..";
import { HeaderPage} from "../../Sections/Screen.styled";
import Footer from "./Footer";
import Logo from "./Logo"
import NavBar from "./NavBar";


function PageStart(){
    return(
        <div>
            <HeaderPage>
                <Logo/>
                <NavBar/>
                <div></div>
            </HeaderPage>
            <Main/>
            <Footer/>
        </div>
    )
}


export default PageStart;