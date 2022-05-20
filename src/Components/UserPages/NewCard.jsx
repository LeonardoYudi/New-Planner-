import styled from "styled-components"

function NewCard(){
    return(
        <StyleCard>
            <HeaderCard>
                <h3>Tarefas</h3>
                <button>X</button>
            </HeaderCard>
            <BodyCard>
                <ul>
                    <li>Mercado</li>
                    <li>Treino</li>
                    <li>Faculdade</li>
                </ul>
            </BodyCard>
        </StyleCard>
    )
}

export default NewCard;

export const StyleCard = styled.div`
    display: grid;
    grid-template-rows: 15% 90%;
    width: 450px;
    height: 300px;
    max-height: auto;
`

export const HeaderCard = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: yellow;
    padding: 1rem;
    height: 100%;

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`

export const BodyCard = styled.section`
    background-color: lightyellow;
    padding: 3rem;
`


