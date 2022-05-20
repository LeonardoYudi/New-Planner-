import { Link } from "react-router-dom";
import styled from "styled-components";
import NotImage from "../../assets/not.jpg"
import { MainArea } from "../../Sections/Screen.styled";


function Main(){
    return(
        <MainArea>
            <InfoStyle>
                <h2>
                    Gerencie aqui o seu Workspace
                </h2>
                <h3>
                    Rotina, calendário e agenda tudo no navegador - com Planner
                </h3>
                <Link to="/login"><button>Experimente Planner de graça</button></Link>
            </InfoStyle>
            <ImageStyle>
                <img src={NotImage} alt="Imagem Notbook"></img>
            </ImageStyle>
        </MainArea>
    )
}

export default Main;


export const InfoStyle = styled.div`
  width: 32vw;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 18rem 4rem;
  h2{
    color: ${(props)=>props.theme.colorLinks};
    font-size: 3.5rem;
    margin-bottom: 0.5rem;
  }
  h3{
    color: ${(props)=>props.theme.colorLinks};
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  button {
    padding: 1rem 2rem;
    background-color: ${(props) => props.theme.titleColor2};
    font-weight: 700;
    font-size: 90%;
    color: #e1e1e1;
    border: none;
    border-radius: 0.5rem;
    transition: all 0.3s;
  }
  button:hover {
    background-color: #2889a6;
    cursor: pointer;
    color: white;
  }

`

export const ImageStyle = styled.div`
  width: 68vw;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    max-width: 70%;
    border-radius: 1.8rem;
    margin-right: 4rem;
  }

`