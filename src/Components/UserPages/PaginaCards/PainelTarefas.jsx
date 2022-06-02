import styled from "styled-components";
import {HeadersPages, StylePainel} from "../PaginaInicial/PainelUser"
import TarefaList from "./TarefaList";

function PainelTarefa(){
    return(
        <StylePainel>
            <HeadersPages>
                <h2>Nome do Projeto</h2>
            </HeadersPages>
            <ContainerProjetos>
                <TarefaList/>
            </ContainerProjetos>
        </StylePainel>
    )

}

export default PainelTarefa;

export const ContainerProjetos = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem 4rem;
    background-image: url('https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`

