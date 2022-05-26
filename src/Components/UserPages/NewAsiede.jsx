import { Link } from "react-router-dom";
import styled from "styled-components"

function NewAside(){
    return(
        <AsideUserStyle>
            <LogoAside>
                <span className="first">Plan</span>
                <span className="second">ner</span>
            </LogoAside>
            <div>
                <section>
                    <h3>Menu</h3>
                    <ul>
                        <BtnAside><Link to="/pagina"><button>Painel</button></Link></BtnAside>
                        <BtnAside><button>Calendário</button></BtnAside>
                        <BtnAside><button>Filmes Recomendados</button></BtnAside>
                        <BtnAside><Link to="/postsIn"><button>Post Infos</button></Link></BtnAside>
                    </ul>
                </section>
                <ul>
                    <BtnAside><Link to="/configs"><button>Configurações</button></Link></BtnAside>
                    <BtnSair><Link to="/"><button>Sair</button></Link></BtnSair>
                </ul>
            </div>
            <p>Desenvolvido por<br/>Alexandre e Leonardo</p>
        </AsideUserStyle>
    );
}

export default NewAside;


export const LogoAside = styled.h1`
    font-size: 250%;
    cursor: pointer;
    .first {
        color: ${(props) => props.theme.white};
    }
    .second {
        color: ${(props) => props.theme.titleColor2};
    }
`

export const AsideUserStyle = styled.aside`
    background-color: #202434;
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;

    div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        bottom: 1;
    }

    section{
        h3{
            padding: 0rem 1rem;
            color: #717285;
        }

    }

    p{
        text-align: center;
        font-size: small;
        color: #717285;
    }

`

export const BtnAside = styled.li`
    list-style: none;

    button{
        background: none;
        border: none;
        border-radius: 1rem;
        color: #616277;
        font-weight: 500;
        font-size: 1.3rem;
        padding: 1rem 1rem 1rem 1.7rem;
        text-align: start;
        transition: all 0.3s;
        width: 100%;
        cursor: pointer;
    }

    button:hover{
        background-color: #717285;
        color: white;
    }

`

export const BtnSair = styled.li`
    list-style: none;

    button{
        background: none;
        border: none;
        border-radius: 1rem;
        color: #616277;
        font-weight: 500;
        font-size: 1.3rem;
        padding: 1rem 1rem 1rem 1.7rem;
        text-align: start;
        transition: all 0.3s;
        width: 100%;
        cursor: pointer;
    }

    button:hover{
        background-color: #970e0e;
        color: white;
    }

`



