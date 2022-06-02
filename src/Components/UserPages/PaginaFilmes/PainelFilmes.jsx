import styled from "styled-components";
import {HeadersPages, StylePainel} from "../PaginaInicial/PainelUser"
import SectionMovies from "../../ApiMovies";
function PainelFilmes(){
    return(
        <StylePainel>
            <HeadersPages>
                <h2>Filmes</h2>
            </HeadersPages>
            <ContainerFilmes>
                <SectionMovies/>
            </ContainerFilmes>
        </StylePainel>
    )

}

export default PainelFilmes;

export const ContainerFilmes = styled.div`
    padding: 2rem 4rem;
`