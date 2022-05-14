import { StyleAsideUser, AsideButton, AsideButtonSair,NewCardForm } from "../Sections/Screen";

function AsideUser(){
    return(
        <StyleAsideUser>
            <div>
                <AsideButton>Perfil</AsideButton>
                <AsideButton>Lembretes</AsideButton>
                <AsideButton>Configurações</AsideButton>
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