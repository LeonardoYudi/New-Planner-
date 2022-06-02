import styled from "styled-components";
import { useState, useEffect } from "react";
import { BsTrash, BsEye, BsPlusCircle } from "react-icons/bs";
import api from "../../../services/api";

function NewPostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    buscarPosts();
  }, []);

  const buscarPosts = async () => {
    let _posts = [];

    try {
      _posts = (await api.get("/cards")).data;
    } catch (error) {
      alert(error.response?.data?.message);
    }

    setPosts(_posts);
  };

  const adicionarCard = async () => {
    const label = window.prompt("Título");

    const _posts = posts.concat();

    const card = {
      label,
      entries: [],
      data_criado: new Date().toLocaleDateString("pt-BR"),
      completed: false,
    };

    let novoCard;
    try {
      novoCard = (await api.post("/cards", card)).data;
    } catch (error) {
      alert(error.response?.data?.message);
    }
    card.id = novoCard.id;

    _posts.push(card);
    setPosts(_posts);
  };

  const deletarCard = async (index) => {
    const ok = window.confirm("Deseja realmente excluir este card?");
    if (!ok) return;

    const _posts = posts.concat();

    try {
      await api.delete(`/cards?cardId=${_posts[index].id}`);
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message);
    }

    _posts.splice(index, 1);
    setPosts(_posts);
  };

  const adicionarEntrada = async (index) => {
    const _posts = posts.concat();

    const description = prompt("Descrição");

    let novaEntrada;
    try {
      novaEntrada = (
        await api.post(`/cards/entries`, {
          cardId: _posts[index].id,
          description,
        })
      ).data;
    } catch (error) {
      alert(error.response?.data?.message);
    }

    const entrada = {
      id: novaEntrada.id,
      description,
    };

    _posts[index].entries.push(entrada);
    setPosts(_posts);
  };

  const deletarEntrada = async (index, eIndex) => {
    const ok = window.confirm("Deseja realmente excluir esta entrada?");
    if (!ok) return;

    const _posts = posts.concat();
    const entryId = _posts[index].entries[eIndex].id;

    try {
      await api.delete(`/cards/entries?entryId=${entryId}`);
    } catch (error) {
      alert(error.response?.data?.message);
    }

    _posts[index].entries.splice(eIndex, 1);
    setPosts(_posts);
  };

  const onChangeSelect = async (e, index, eIndex) => {
    const _posts = posts.concat();

    const completed = e.currentTarget.checked;

    _posts[index].entries[eIndex].completed = completed;

    try {
      await api.post("/cards/entries/completes", {
        entryId: _posts[index].entries[eIndex].id,
        completed: completed ? 1 : 0,
      });
    } catch (error) {
      alert(error.response?.data?.message);
    }

    setPosts(_posts);
  };

  return (
    <PostsStyle>
      <TitleSectionPost>
        <h2>Post List</h2>
        <NewPost onClick={adicionarCard}>Novo Post</NewPost>
      </TitleSectionPost>
      <PostList>
        {posts.map((post, index) => (
          <Post key={index}>
            <PostHeader>
              <h3>{post.label}</h3>
              <button
                style={{ paddingRight: "6px", paddingLeft: "6px" }}
                onClick={() => adicionarEntrada(index)}
              >
                +
              </button>
              <button onClick={() => deletarCard(index)}>
                <BsTrash size={18} />
              </button>
            </PostHeader>
            <PostMain>
              {post.entries.map((entry, eIndex) => (
                <div key={eIndex}>
                  <p
                    key={eIndex}
                    style={{
                      textDecoration: entry.completed ? "line-through" : "none",
                    }}
                  >
                    <input
                      onChange={(e) => onChangeSelect(e, index, eIndex)}
                      checked={entry.completed}
                      type="checkbox"
                    ></input>{" "}
                    {entry.description}
                    <button
                      style={{ float: "right" }}
                      onClick={() => deletarEntrada(index, eIndex)}
                    >
                      <BsTrash size={18} />
                    </button>
                  </p>
                  <br />
                </div>
              ))}
            </PostMain>
            <PostFooter>
              {/*<div>
                <label htmlFor="status">Status:</label>
                <select
                  onChange={(e) => onChangeSelect(e, index)}
                  value={post.completed}
                  name="status"
                  id="status"
                >
                  <option value={false}>Fazendo</option>
                  <option value={true}>Completo</option>
                </select>
              </div>*/}
              <p>Criado em:{post.data_criado}</p>
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
`;

export const TitleSectionPost = styled.div`
  padding: 1rem 2rem;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  h2 {
    font-weight: 500;
  }
`;

export const PostList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-template-rows: auto;
  column-gap: 1rem;
  row-gap: 2rem;
  padding: 1rem;
`;

export const Post = styled.div`
  background-color: #f4fe7d;
  width: 330px;
  min-height: 230px;
`;
export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 0.3rem;

  button {
    background: none;
  }
`;
export const PostMain = styled.div`
  padding: 0.3rem 1rem;
`;
export const PostFooter = styled.div`
  padding: 0.5rem;
  border-top: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;

  select {
    border: none;
    outline: none;
    border-radius: 20%;
    padding: 8px;
    font-weight: bolder;
  }
  p {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

export const NewPost = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 2rem;
  justify-content: space-around;
  cursor: pointer;
`;
