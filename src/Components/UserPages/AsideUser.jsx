import { Link } from "react-router-dom";
import styled from "styled-components";

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
                <Link to="/"><AsideButtonSair>Sair</AsideButtonSair></Link>
            </div>
        </StyleAsideUser>
    )
}

export default AsideUser;

export const StyleAsideUser = styled.aside`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  padding: 1rem 0rem 0rem 0rem;
  justify-content: space-between;
  div{
    display: flex;
    flex-direction: column;
  }
`

export const AsideButton = styled.button`
  padding: 1rem 4rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1.1rem;
  border:none;
  text-align: start;
  background: none;
  transition: all 0.4s;
  border-radius: 0rem 1rem 1rem 0rem;
  
  :hover{
    background-color: #cee5eb;
  }
`
export const AsideButtonSair = styled(AsideButton)`
  margin-bottom: 0rem;
  text-align: center;
  :hover{
    background-color:#B73838;
  }
`
export const NewCardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  input{
    width: 80%;
    margin-bottom: 0.4rem;
    padding: 0.7rem;
    outline: none;
    border: none;
    border-radius: 1rem;
    text-align: center;
  }
  button{
    width: 80%;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 1rem;

    :hover{
      cursor: pointer;
      background: #1EB06A;
    }
  }
`