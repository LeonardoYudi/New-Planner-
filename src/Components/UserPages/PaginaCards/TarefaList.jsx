import styled from "styled-components";
import { useState, useEffect } from "react";
import api from "../../../services/api";
import { BsTrash } from "react-icons/bs";

function TarefaList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    buscarPosts();
  }, []);

  const buscarPosts = async () => {
    let _posts = [];

    try {
      _posts = (await api.get(`/cards`)).data;
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
      console.log(error);
      alert(error.response?.data?.message || "Não foi possível criar card");
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
    <TarefaListStyle>
      {posts.map((post, index) => (
        <div className="tarefaCardStyle tarefaCardDislay">
          <div className="headerCard">
            <h2>{post.label}</h2>
            <div className="btn-div">
              <button onClick={() => adicionarEntrada(index)}>+</button>
              <button onClick={() => deletarCard(index)}>X</button>
            </div>
          </div>
          <div className="mainCard">
            {post.entries.map((entry, eIndex) => (
              <div className="tarefaItem">
                <input
                  type="checkbox"
                  onChange={(e) => onChangeSelect(e, index, eIndex)}
                  checked={entry.completed}
                />
                <h3>{entry.description}</h3>
                <input type="date" className="data" />
                <button
                  className="btn-delTarefa"
                  onClick={() => deletarEntrada(index, eIndex)}
                >
                  <BsTrash size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="tarefaCardStyle tarefaCardDislay create ">
        <button onClick={() => adicionarCard()}>Novo Card</button>
      </div>
    </TarefaListStyle>
  );
}

export default TarefaList;

export const TarefaListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, min(450px));
  grid-template-rows: auto;
  column-gap: 3rem;
  row-gap: 2rem;
  .headerCard {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid gray;
    .btn-div {
      button {
        cursor: pointer;
        margin-left: 2rem;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        border: none;
      }
    }
  }
  .mainCard {
  }

  .tarefaItem {
    h3 {
      font-weight: 500;
      font-size: 1rem;
    }
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;

    input[type="checkbox"] {
      cursor: pointer;
      width: 16px;
      height: 16px;
    }

    input[type="date"] {
      background: none;
      border: none;
      outline: none;
    }

    .btn-delTarefa {
      margin: 0;
      padding: 0;
      cursor: pointer;
      background: none;
      border: none;
    }
  }

  .tarefaCardDislay {
    min-width: 400px;
    min-height: 290px;
  }

  .tarefaCardStyle {
    backdrop-filter: blur(0px) saturate(180%);
    -webkit-backdrop-filter: blur(0px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
  }

  .create {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      padding: 1rem 2rem;
      border-radius: 12px;
      border: none;
      cursor: pointer;
    }
  }
`;
