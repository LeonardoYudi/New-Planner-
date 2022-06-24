import styled from "styled-components";
import Perfil from "./Perfil";
import Clock from "./Clock";
import Achievements from"./Achievements"
import TarefasChegando from "./TarefasChegando";

function PainelUser(){
    return(
        <StylePainel>
            <HeadersPages>
                <h2>Painel</h2>
            </HeadersPages>
            <ContainerArea>
                <Perfil/>
                <ContainerWidgets>
                    <div className="div">
                        <Clock/>
                    </div>
                </ContainerWidgets>
                {/*<ContainerWidgets>
                    <div className="div">
                        <Clock/>
                        <TarefasChegando/>
                    </div>

                    <div className="div">
                        <Achievements/>
                    </div>
                </ContainerWidgets>*/}
            </ContainerArea>
        </StylePainel>
    )

}

export default PainelUser;

export const StylePainel = styled.div`
    width: 86%;
    display: grid;
    grid-template-rows: 10% 90%;
`

export const HeadersPages = styled.div`
    display: flex;
    align-items: center;
    padding-left: 3rem;
    padding-right: 3rem;
    border-bottom: 1px solid black;
    justify-content: space-between;
`

export const ContainerArea = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem 4rem;
    display: grid;
    grid-template-columns: 45% 45%;
    column-gap: 8rem;
    background-image: url('https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`

export const ContainerWidgets = styled.div`
    display: grid;
    grid-template-rows: 30% 70%;
    row-gap: 5rem;

    .div{
        backdrop-filter: blur(0px) saturate(180%);
        -webkit-backdrop-filter: blur(0px) saturate(180%);
        background-color: rgba(255, 255, 255, 0.75);
        border-radius: 12px;
        border: 1px solid rgba(209, 213, 219, 0.3);
    }
`