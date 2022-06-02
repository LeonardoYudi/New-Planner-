import styled from "styled-components";
import Foto from "../../../assets/tim.jpg"

function Perfil(){
    return(
        <PerfilCard>
            <div className="foto">
                <img src={Foto}/>
            </div>
            <Container>
                <div className="flexMy profile">
                    <h3>Meu Perfil</h3>
                    <h4>
                        Data de criação<br/> 31/05/2022
                    </h4>
                </div>
                <div className="flexInfo">
                    <h4>Nome:</h4>
                    <h4>Leonardo Yudi Iwama</h4>
                </div>
                <div className="flexInfo">
                    <h4>Email:</h4>
                    <h4>leonardo_iwama@ufms.br</h4>
                </div>
                <div className="flexInfo">
                    <h4>Verificado:</h4>
                    <h4>Sim</h4>
                </div>
            </Container>
        </PerfilCard>
    )
}

export default Perfil;


export const PerfilCard = styled.div`
    display: grid;
    grid-template-rows: 40% 60%;
    flex-direction: column;
    border-radius: 2rem;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    
    .foto{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2rem 2rem 0rem 0rem;
        border-bottom: 1px solid gray;
    }

    .foto img{
        width: 250px;
        height: 250px;
        border-radius: 50%;
        cursor: pointer;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 0rem 0rem 2rem 2rem;
    padding: 2rem;

    .flexMy{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid gray;
        padding-bottom: 2rem;
    }

    .profile{
        h3{
          font-weight: 600;
        }
        h4{
            font-weight: 500;
            text-align: center;
            color: #29292999;
        }
    }

    .flexInfo{
        display: flex;
        align-items: center;
        padding: 1.3rem 0rem;
        border-bottom: 1px solid gray;
        justify-content: space-between;
    }


`