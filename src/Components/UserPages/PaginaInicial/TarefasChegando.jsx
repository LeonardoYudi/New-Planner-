import styled from "styled-components"

function TarefasChegando(){
    return(
        <StyleTarefas>
           <div className="tarefa">
            <h3>Entregar Protótipo</h3>
            <h3>03/06/2022</h3>
           </div>
        </StyleTarefas>

    )
}

export default TarefasChegando;

export const StyleTarefas = styled.div`
    display: flex;
    flex-direction: column;

    .tarefa{
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid gray;
        border-bottom: 1px solid gray;

        h3{
            font-weight: 500;
        }
    }
`

