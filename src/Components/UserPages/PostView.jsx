import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsTrash} from "react-icons/bs";
function PostView(){
    return(
        <PostArea>
            <Post>
                <HeaderPost>
                    <button id="voltar"><Link to="/pagina">Voltar</Link></button>
                    <h2>Título da Tarefa</h2>
                    <button id="excluir"><BsTrash size={24}/></button>
                </HeaderPost>
                <MainPost>

                </MainPost>
                <FooterPost>
                    <button>Nova Tarefa</button>
                    <div>
                        <label for="status">Status:</label>
                        <select name="status" id="status">
                            <option>Fazendo</option>
                            <option>Completo</option>
                        </select>
                        <p>Criado em:{}</p>
                    </div>
                </FooterPost>
            </Post>
        </PostArea>
    );
}

export default PostView;

export const PostArea = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Post = styled.div`
    background: #F4FE7D;
    height: 70%;
    width: 75%;
    border-radius: 1rem;
    display: grid;
    grid-template-rows: 10% 70% 20%;
`

export const HeaderPost = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 1rem;

    #voltar{
        cursor: pointer;
        border: none;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
    }

    #voltar:hover{
        background-color: lightblue;
    }

    #excluir{
        cursor: pointer;
        border: none;
        padding: 1rem 1rem;
        border-radius: 0.5rem;
    }

    #excluir:hover{
        background-color: red;
    }
`

export const MainPost = styled.div`

`

export const FooterPost = styled.div`
    display: flex;
    justify-content: space-around;
`