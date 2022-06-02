import styled from "styled-components";

function Achievements(){
    return(
        <StyleAchievements>
           <h2>Relatório</h2>
            <div className="borda">
                <div className="conquistas">
                    <h3>Tarefas realizadas:</h3>
                    <h3>25</h3>
                </div>
                <div className="conquistas">
                        <h3>Tarefas para fazer:</h3>
                        <h3>13</h3>
                </div>
            </div>
        </StyleAchievements>
    )
}

export default Achievements;

export const StyleAchievements = styled.div`
    display: flex;
    flex-direction: column;

    h2{
        padding: 1.3rem;
        border-bottom: 1px solid gray;
    }

    .borda{
        padding:  0rem 1.3rem;
    }

    .conquistas{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid gray;
        h3{
            font-weight: 500;
            padding: 1rem;
        }
    }
`


