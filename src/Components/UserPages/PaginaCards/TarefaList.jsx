import styled from "styled-components";

function TarefaList(){
    return(
        <TarefaListStyle>
            <div className="tarefaCardStyle tarefaCardDislay">
               <div className="headerCard">
                    <h2>Titulo</h2>
                    <div className="btn-div">
                        <button>+</button>
                        <button>X</button>
                    </div>
               </div>
               <div className="mainCard">
                   <div className="tarefaItem">
                        <input type="checkbox"/>
                        <h3>Entrega do Protótipo</h3>
                        <input type="date" className="data"/>
                   </div>
               </div>
            </div>
            
            <div className="tarefaCardStyle tarefaCardDislay create ">
                <button>Novo Card</button>
            </div>
             
        </TarefaListStyle>

    )
}

export default TarefaList;

export const TarefaListStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,min(450px));
    grid-template-rows: auto;
    column-gap: 3rem;
    row-gap: 2rem;
    .headerCard{
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid gray;
        .btn-div{
            button{
                cursor: pointer;
                margin-left: 2rem;
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                border: none;
            }
        }
    }
    .mainCard{

    }

    .tarefaItem{
        h3{
            font-weight: 500;
            font-size: 1rem;
        }
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid gray;
        input[type="date"]{
            background: none;
            border: none;
            outline: none;
        }
    }

    .tarefaCardDislay{
        min-width: 400px;
        min-height: 290px;
    }

    .tarefaCardStyle{
        backdrop-filter: blur(0px) saturate(180%);
        -webkit-backdrop-filter: blur(0px) saturate(180%);
        background-color: rgba(255, 255, 255, 0.75);
        border-radius: 12px;
        border: 1px solid rgba(209, 213, 219, 0.3);
    }

    .create{
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            padding: 1rem 2rem;
            border-radius: 12px;
            border: none;
            cursor: pointer;
        }
    }
`


