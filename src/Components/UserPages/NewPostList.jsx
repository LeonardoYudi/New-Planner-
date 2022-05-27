import styled from "styled-components";
import { useState, useEffect } from "react";
import { BsTrash, BsEye, BsPlusCircle } from "react-icons/bs";

function NewPostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const label = "Tarefas do dia";
    const dataCriado = new Date().toLocaleDateString("pt-BR");
    let _posts = [{ label, dataCriado, completed: true }];
    setPosts(_posts);
  }, []);

  const deletarCard = (index) => {
    const _posts = posts.concat();
    _posts.splice(index, 1);

    setPosts(_posts);
  };

  const completarTarefa = (index) => {
    // Implementar
  }

  const adicionarCard = () => {
    const _posts = posts.concat();
    _posts.push({ label: "", dataCriado: new Date().toLocaleDateString("pt-BR"), completed: false });

    setPosts(_posts);
  };

  return (
    <PostsStyle>
        <TitleSectionPost>
            <h2>Post List</h2>
            <NewPost onClick={adicionarCard}>
                Novo Post
           </NewPost>
        </TitleSectionPost>
        <PostList>
           {posts.map((post,index)=>(
              <Post>
                  <PostHeader>
                    <h3>{post.title}</h3>
                    <button onClick={() => deletarCard(index)}>
                    <BsTrash size={18} />
                    </button>
                  </PostHeader>
                  <PostMain>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae officiis at natus voluptatibus recusandae. Sed vero soluta eius alias unde blanditiis eos. Nemo similique atque ipsum pariatur commodi, voluptas neque!</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae officiis at natus voluptatibus recusandae. Sed vero soluta eius alias unde blanditiis eos. Nemo similique atque ipsum pariatur commodi, voluptas neque!</p>
                  </PostMain>
                  <PostFooter>
                    <div>
                        <label for="status">Status:</label>
                        <select value={post.completed} name="status" id="status">
                            <option value={false}>Fazendo</option>
                            <option value={true}>Completo</option>
                        </select>
                    </div>
                    <p>Criado em:{post.dataCriado}</p>
                  </PostFooter>
              </Post>
           ))}
        </PostList>
    </PostsStyle>
  );
}

export default NewPostList;

export const PostsStyle = styled.section`
    border-right: 1px solid lightgray;
`


export const TitleSectionPost = styled.div`
    padding: 1rem 2rem;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-between;
    h2{
        font-weight: 500;
    }
`

export const PostList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(330px,1fr));
    grid-template-rows: auto;
    column-gap: 1rem;
    row-gap: 2rem;
    padding: 1rem;
`

export const Post = styled.div`
    background-color: #f4fe7d;
    width: 330px;
    min-height: 230px;
`
export const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: 0.3rem;

    button{
      background:none;
    }
`
export const PostMain = styled.div`
    padding: 0.3rem 1rem;
`
export const PostFooter = styled.div`
    padding: 0.5rem;
    border-top: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;

    select{
        border: none;
        outline: none;
        border-radius: 20%;
        padding: 8px;
        font-weight: bolder;
    }
    p{
        font-size: 0.9rem;
        margin-top: 0.5rem;
    }
`

export const NewPost = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem 2rem;
    justify-content: space-around;
    cursor: pointer;
`