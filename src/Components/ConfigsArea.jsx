import { CardArea, CardList,AlterarSenhaArea} from "../Sections/Screen";

function ConfigsArea(){
    return(
        <CardArea>
            <h2>Configurações</h2>
            <CardList>
                <AlterarSenhaArea>
                    <h3>Alterar Senha</h3>
                    <form>
                        <input type="password" placeholder="Digite sua Senha" />
                        <input type="password" placeholder="Digite sua nova Senha" />
                        <input type="password" placeholder="Digite sua nova Senha" />
                    </form>
                    <button>Confirmar</button>
                </AlterarSenhaArea>
            </CardList>
        </CardArea>
    )
}

export default ConfigsArea;