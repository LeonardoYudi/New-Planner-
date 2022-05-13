import { FaHome,FaUserAlt, FaMapMarker, FaArrowLeft,FaTimesCircle, FaPlusCircle } from "react-icons/fa";
import styled from "styled-components";

function PageUser(){
    return(
        <>
        <AsideUser/>
        <CardArea/>
        </>
    )
}

export default PageUser;

function AsideUser(){
    return(
        <StyleAsideUser>
            <Option><FaUserAlt/> Perfil</Option>
            <Option><FaHome/> Lembretes</Option>
            <Sair><FaArrowLeft/> Sair</Sair>
        </StyleAsideUser>
    )
}

function CardArea(){
    return(
        <Container>
            <h2>Lembretes</h2>
            <CardsArea>
                <Card>
                    <h3>Title</h3>
                    <h4>Tarefas</h4>
                </Card>
                <ButtonAddCard>
                    <FaPlusCircle size={30}/>
                    <h3>Novo Card</h3>
                </ButtonAddCard>
            </CardsArea>
        </Container>
    )
}


export const StyleAsideUser = styled.aside`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 20%;
    padding: 10rem 2rem;
    border: 1px solid black;
`
export const Option = styled.button`
    width: 70%;
    text-align: start;
    font-size: 120%;
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

export const Sair = styled.button`
    width: 70%;
    text-align: start;
    font-size: 130%;
    margin-bottom: 2rem;
    padding: 1rem 2rem;
    align-items: baseline;
    background: none;
    border: none;
    border-radius: 1rem;
    :hover{
        background-color: #bc3131c6;
    }
`

export const Container = styled.div`
    border: 1px solid black;
    width: 79%;
    h2{
        text-align: center;
        margin: 4rem 0;
    }
`

export const CardsArea = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    column-gap: 3rem;
    row-gap: 4rem;
    padding: 1rem;
`

export const Card = styled.li`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: auto;
    padding: 1rem;
`

export const ButtonAddCard = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    margin: 1rem;
    h3{
        padding: 0.3rem;
    }

    :hover{
        background-color: aliceblue;
        cursor: pointer;
    }
`