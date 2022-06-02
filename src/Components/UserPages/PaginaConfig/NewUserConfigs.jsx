import Aside from "../Aside2.0"
import NewConfigsArea from "./NewConfigsArea";
import { UserPainelStyle } from "../../../Sections/Screen.styled";
function NewUserConfigs(){
    return(
        <UserPainelStyle>
            <Aside/>
            <NewConfigsArea/>
        </UserPainelStyle>
    );
}

export default NewUserConfigs;

