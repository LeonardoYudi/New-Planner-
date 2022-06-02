import { Main } from "..";
import { HeaderPage} from "../../Sections/Screen.styled";
import { PageStyle } from "../../Sections/TesteScreen";
import Footer from "./Footer";
import Logo from "./Logo"
import NavBar from "./NavBar";


function PageStart(){
    return(
        <PageStyle>
            <HeaderPage>
                <Logo/>
                <NavBar/>
                <div></div>
            </HeaderPage>
            <Main/>
            <Footer/>
        </PageStyle>
    )
}


export default PageStart;