import styled from "styled-components";
import { CardArea, CardList } from "./CardSpace";

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

export const AlterarSenhaArea = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  form{
    display: flex;
    flex-direction: column;
    input{
      padding: 1rem 2rem;
      margin-bottom: 1rem;
      border-radius: 1rem;
    }
  }

  button{
    padding: 1rem 2rem;
    border-radius: 1rem;
    outline: none;
    width: 80%;
  }
`