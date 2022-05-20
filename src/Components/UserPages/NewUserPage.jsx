import { UserPainelStyle } from "../../Sections/Screen.styled";
import NewAside from "./NewAsiede";
import NewCardSpace from "./NewCardSpace";


function NewUserPage(){
    return(
        <UserPainelStyle>
            <NewAside/>
            <NewCardSpace/>
        </UserPainelStyle>
    );
}

export default NewUserPage;

