import { UserPainelStyle } from "../../../Sections/Screen.styled";
import Aside from "../Aside2.0";
import PainelTarefa from "./PainelTarefas";

function TarefaPage(){
    return (
        <UserPainelStyle>
          <Aside/>
          <PainelTarefa/>
        </UserPainelStyle>
      );
}

export default TarefaPage;