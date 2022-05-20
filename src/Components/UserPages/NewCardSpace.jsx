import styled from "styled-components"
import { date } from "../../Sections/Screen.styled"
import SectionMovies from "../ApiMovies"
import NewCard from "./NewCard"

function NewCardSpace(){
 
    return(
        <StyleCardSpace>
            <StyleSection1>
               <CardSection1>
                    <h2 id="name">Olá, Leonardo !</h2>
               </CardSection1>
            </StyleSection1>
            <StyleSection2>
               <Card>
                    <h2>Hoje é Segunda-Feira</h2>
                    <div>
                        <h2>Data Atual</h2>
                        <h2>17/05/2022</h2>
                    </div>
               </Card>
               <Card>
                   <div className="text-center">
                        <h2>Hora Atual</h2>
                        <h2>05:59</h2>
                   </div>
               </Card>
               <Card>
                    <div className="text-center">
                        <h2>Tarefas feitas</h2>
                        <h2>15</h2>
                    </div>
               </Card>
            </StyleSection2>
            <StyleSection3>
                <NewCard/>
            </StyleSection3>
        </StyleCardSpace>
    )
}

export default NewCardSpace

export const StyleCardSpace = styled.section`
    width: 85%;
    height: 100%;
    background-color: ${(props=> props.theme.userWork)};
    transition: all 0.7s;
    display: grid;
    grid-template-rows: 10% 20% 70%;
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
    grid-template-rows: 160px;
    column-gap: 5rem;
    row-gap: 2rem;
    padding: 2rem;
`

export const Card = styled.div`
   background-color: #fff;
   box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.77);
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

   :hover{
        transform: scale(1.1);
   }
`
export const StyleSection3 = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(700px,1fr));
    column-gap: 5rem;
    row-gap: 2rem;
    padding: 2rem;
`




