import styled from "styled-components"

function NewConfigsArea(){
 
    return(
        <StyleConfigsSpace>
            <StyleSection1>
               <CardSection1>
                    <h2 id="name">Configurações</h2>
               </CardSection1>
            </StyleSection1>
            <StyleSection2>
               <AlterarSenha>
                    <h2>Alterar Senha</h2>
                    <form>
                        <input type="password" placeholder="Digite sua Senha" required/>
                        <input type="password" placeholder="Digite sua nova Senha" required/>
                        <input type="password" placeholder="Digite sua nova Senha" required/>
                    </form>
                    <button type="submit">Alterar</button>
               </AlterarSenha>
            </StyleSection2>
        </StyleConfigsSpace>
    )
}

export default NewConfigsArea

export const StyleConfigsSpace = styled.section`
    width: 85%;
    height: 100%;
    background-color: ${(props=> props.theme.userWork)};
    transition: all 0.7s;
    display: grid;
    grid-template-rows: 10% 90%;
`

export const StyleSection1 = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-bottom: 2px solid lightgray;
`

export const CardSection1 = styled.div`
    margin-left: 2rem;
`

export const StyleSection2 = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    grid-template-rows: 250px;
    column-gap: 5rem;
    row-gap: 2rem;
    padding: 2rem;
`

export const AlterarSenha = styled.div`
   background-color: #fff;
   box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.77);
   max-width: 450px;
   border-radius: 0.5rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
    cursor: pointer;
    transition: all 0.4s;
   .text-center{
       text-align: center;
   }

   form{
       display: flex;
       flex-direction: column;
       width: 100%;
       align-items: center;
        input{
            width: 90%;
            padding: 0.7rem 1.3rem;
            margin-bottom: 0.4rem;
            border-radius: 1rem;
        }
   }

   button{
       width: 80%;
       padding: 0.7rem;
       border-radius: 1rem;
   }

`