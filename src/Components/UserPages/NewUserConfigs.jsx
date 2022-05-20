import { UserPainelStyle } from "../../Sections/Screen.styled";
import NewAside from "./NewAsiede";
import NewConfigsArea from "./NewConfigsArea";

function NewUserConfigs(){
    return(
        <UserPainelStyle>
            <NewAside/>
            <NewConfigsArea/>
        </UserPainelStyle>
    );
}

export default NewUserConfigs;

