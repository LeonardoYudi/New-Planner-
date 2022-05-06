import { InfoStyle,ImageStyle, } from "../Sections/Screen"
import NotImage from "../assets/not.jpg"
import { MainArea } from "../Sections/Screen.styled";


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
                <button>Experimente Planner de graça</button>
            </InfoStyle>
            <ImageStyle>
                <img src={NotImage} alt="Imagem Notbook"></img>
            </ImageStyle>
        </MainArea>
    )
}

export default Main;