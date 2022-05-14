import { Link } from "react-router-dom";
import { StyleAsideUser, AsideButton, AsideButtonSair,NewCardForm } from "../Sections/Screen";

function AsideUser(){
    return(
        <StyleAsideUser>
            <div>
                <AsideButton>Perfil</AsideButton>
                <Link to="/lembretes"><AsideButton>Lembretes</AsideButton></Link>
                <Link to="/configuracoes"><AsideButton>Configurações</AsideButton></Link>
            </div>
            <div>
                <NewCardForm>
                    <input type="text" placeholder="Título novo card" required/>
                    <button>Criar</button>
                </NewCardForm>
                <AsideButtonSair>Sair</AsideButtonSair>
            </div>
        </StyleAsideUser>
    )
}

export default AsideUser;