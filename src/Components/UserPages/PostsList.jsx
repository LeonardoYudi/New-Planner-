import styled from "styled-components";
import { useState, useEffect } from "react";
import { BsTrash, BsEye, BsPlusCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Calendario from "./Calendario";

function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const label = "Tarefas do dia";
    const dataCriado = new Date().toLocaleDateString("pt-BR");

    let _posts = [{ label, dataCriado, completed: true }];

    _posts.push({ label, dataCriado, completed: false });
    _posts.push({ label, dataCriado, completed: false });
    _posts.push({ label, dataCriado, completed: false });
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
    <>
      <AreaPosts>
        <TitleSection>
          <h2>Seus Posts</h2>
        </TitleSection>
        <PostList>
          {posts.map((post, index) => (
            <Post>
              <PostTitle>
                <h3>{post.title}</h3>
                <button onClick={() => deletarCard(index)}>
                  <BsTrash size={18} />
                </button>
              </PostTitle>
              <PostMain></PostMain>
              <PostFooter>
                <Status>
                  <label for="status">Status:</label>
                  <select value={post.completed} name="status" id="status">
                    <option value={false}>Fazendo</option>
                    <option value={true}>Completo</option>
                  </select>
                </Status>
                <p>Criado em:{post.dataCriado}</p>
              </PostFooter>
            </Post>
          ))}
          <NovaPostagem onClick={adicionarCard}>
            Novo Post
            <BsPlusCircle size={28} />
          </NovaPostagem>
        </PostList>
      </AreaPosts>
      <Calendario />
    </>
  );
}

export default PostsList;

export const AreaPosts = styled.section`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleSection = styled.section`
  width: 100%;
  border-bottom: 1px solid lightgray;
  padding: 1rem 2rem;
`;

export const PostList = styled.ul`
  list-style: none;
  padding: 1rem 2rem;
  display: flex;
`;

export const Post = styled.li`
  list-style: none;
  background: #f4fe7d;
  width: 350px;
  height: 190px;
  max-height: auto;
  max-width: auto;
  display: grid;
  grid-template-rows: 20% 50% 30%;
`;

export const PostTitle = styled.div`
  display: flex;
  align-items: baseline;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid black;
  justify-content: space-between;
  h3 {
    font-weight: 400;
  }
  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;
export const PostMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border: none;
    align-items: center;
    padding: 0.5rem 2rem;
    border-radius: 2rem;
    font-size: 1rem;
    background-color: lightblue;
  }
`;
export const Status = styled.div`
  padding: 0.1rem;
  select {
    outline: none;
    padding: 0.2rem;
    border-radius: 20%;
    border: none;
  }
`;

export const PostFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin-top: 0.2rem;
    font-size: small;
  }
`;
export const NovaPostagem = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  padding: 0.5rem;
  font-size: 1.3rem;
  cursor: pointer;
`;
