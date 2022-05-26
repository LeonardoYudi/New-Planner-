import styled from "styled-components"
import Clock from "./Clock"
import PostsList from "./PostsList"
function NewCardSpace(){
    
    return(
        <StyleCardSpace>
            <StyleSection1>
                    <h2 id="name">Olá, Leonardo !</h2>   
                    <Clock/>
                    <div>
                    </div>
            </StyleSection1>
            <StyleSection2>
               <PostsList/>
            </StyleSection2>
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
    grid-template-rows: 10% 90%;
`

export const StyleSection1 = styled.section`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid lightgray;
    padding: 2rem;
    h2{
        font-weight: 500;
    }
`

export const StyleSection2 = styled.section`
    display: flex;
`











