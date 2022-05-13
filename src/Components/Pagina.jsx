import { CenterArea } from "../Sections/Screen.styled";

import { FaHome,FaUserAlt, FaMapMarker, FaArrowLeft,FaTimesCircle } from "react-icons/fa";
import styled from "styled-components";

function Pagina(){
    return(
        <StylePag>
            <AsidePagina/>
            <Conteudo/>
        </StylePag>
    )
}

export const StylePag = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
`


function AsidePagina(){
    return(
        <StyleAsideUser>
            <Option><FaUserAlt/> Pefil</Option>
            <Option><FaHome/> Paineis</Option>
            <OptionSair><FaArrowLeft/> Sair</OptionSair>
        </StyleAsideUser>
    )
}

export const StyleAsideUser = styled.aside`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 20%;
    padding: 10rem 2rem;
`

export const Option = styled.button`
    width: 60%;
    text-align: start;
    font-size: 130%;
    margin-bottom: 2rem;
    padding: 1rem 2rem;
    align-items: baseline;
    background: none;
    border: none;
    border-radius: 1rem;
    :hover{
        background-color: lightblue;
    }
`

export const OptionSair = styled(Option)`
    :hover{
        background-color: #bc3131c6;
    }
`

function Conteudo(){

    const colors = {
        first: 'aliceblue',
        second: '#a3d9b1',
        terc: "#d9a3a3",
        quart: "#f0b9f0", 
    }

    return(
        <>
        <ContStyle>
            <Header>
                <h1>Hoje</h1>
                <FaTimesCircle size={25}/>
            </Header>
            <Cmp>
                <Inp type="checkbox"></Inp>
                <label htmlFor="">Reunião as 14:00</label>
            </Cmp>
            <Cmp>
                <Inp type="checkbox"></Inp>
                <label htmlFor="">Aula natação as 15:00</label>
            </Cmp>
            <Cmp>
                <Inp type="checkbox"></Inp>
                <label htmlFor="">Entrega do protótipo as 17:00</label>
            </Cmp>
        </ContStyle>
        <ContStyle>
            <Header>
                <h1>Amanhã</h1>
                <FaTimesCircle size={25}/>
            </Header>
            <Cmp>
                <Inp type="checkbox"></Inp>
                <label htmlFor="">Reunião as 14:00</label>
            </Cmp>
            <Cmp>
                <Inp type="checkbox"></Inp>
                <label htmlFor="">Aula natação as 15:00</label>
            </Cmp>
            <Cmp>
                <Inp type="checkbox"></Inp>
                <label htmlFor="">Entrega do protótipo as 17:00</label>
            </Cmp>
        </ContStyle>
        <ContStyle>
            <Header>
                <h1>Segunda</h1>
                <FaTimesCircle size={25}/>
            </Header>
            <Cmp>
                <Inp type="checkbox"></Inp>
                <label htmlFor="">Reunião as 14:00</label>
            </Cmp>
            <Cmp>
                <Inp type="checkbox"></Inp>
                <label htmlFor="">Aula natação as 15:00</label>
            </Cmp>
            <Cmp>
                <Inp type="checkbox"></Inp>
                <label htmlFor="">Entrega do protótipo as 17:00</label>
            </Cmp>
        </ContStyle>
        <ContStyle>
            <Header>
                <h1>Terça</h1>
                <FaTimesCircle size={25}/>
            </Header>
            <Cmp>
                <Inp type="checkbox"></Inp>
                <label htmlFor="">Reunião as 14:00</label>
            </Cmp>
            <Cmp>
                <Inp type="checkbox"></Inp>
                <label htmlFor="">Aula natação as 15:00</label>
            </Cmp>
            <Cmp>
                <Inp type="checkbox"></Inp>
                <label htmlFor="">Entrega do protótipo as 17:00</label>
            </Cmp>
        </ContStyle>
       </> 
    )
}

export const ContStyle = styled.div`
    margin: 9rem 1rem;
    h1{
        margin-bottom: 2rem;
    }
    height: 250px;
    padding: 1rem;
    border-radius: 1rem;
    background-color: aliceblue;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Inp = styled.input`
   font-size: 18px;
`

export const Cmp = styled.div`
   margin-bottom: 1rem;
`



export default Pagina;