import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CenterArea,
  AcessArea,
  FormAcess,
  InputAcess,
  ButtonAcess,
  AcessP,
  ButtonLogCad,
  LinkStyle,
} from "../../Sections/Screen.styled";
import api from "../../services/api";

function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    senha: "",
  });

  const navigate = useNavigate();

  const updateField = ({ target }) => {
    const input = { ...userInput };
    input[target.name] = target.value.trim();
    setUserInput(input);
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const resp = await api.post("/users/login", userInput);
      localStorage.setItem("token", resp.data?.token);
      navigate("/pagina");
    } catch (error) {
      alert(
        error.response?.data?.message || "Ops! Não foi possível efetuar o login"
      );
    }
  };

  return (
    <CenterArea>
      <AcessArea>
        <h2>Login</h2>
        <h3>Para ter acesso aos nossos serviços</h3>
        <h3>efetue seu login</h3>
        <FormAcess>
          <InputAcess
            onChange={updateField}
            value={userInput.email}
            name="email"
            placeholder="Login"
            type="email"
            required
          ></InputAcess>
          <InputAcess
            onChange={updateField}
            value={userInput.senha}
            name="senha"
            placeholder="Senha"
            type="password"
            required
          ></InputAcess>
        </FormAcess>
        <ButtonAcess onClick={login}>Login</ButtonAcess>
        <Link to="/recuperacao">ESQUECI MINHA SENHA</Link>
        <br/><br/>
        <AcessP>Não possui conta ?</AcessP>
        <Link to="/cadastro">
          <ButtonLogCad>Criar Agora</ButtonLogCad>
        </Link>
      </AcessArea>
    </CenterArea>
  );
}

export default Login;
