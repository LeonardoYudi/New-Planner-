import styled, { ThemeProvider } from "styled-components";
import { FaSun, FaMoon } from "react-icons/fa";
import { Logo, NavBar , Main, Footer, Login, Cadastro,PageUserLembretes,UserPageConfigs} from "../Components";
import { useState } from "react";
import { HeaderArea , MainArea, FooterPage} from "./Screen.styled";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Screen() {
  const [theme, setTheme] = useState("light");

  const LightTheme = {
    titleColor1: "black",
    titleColor2: "#097b99",
    backgroundPage: "#e8e4e4",
    backgroundIcon: "#292C35",
    colorLinks: "black",
    colorTitleAcess: "#284c54",
    backGroundButton1:"#0ea4c9",
    backGroundButton2:"none",
  };

  const DarkTheme = {
    titleColor1: "white",
    titleColor2: "#097b99",
    backgroundPage: "#080404",
    backgroundIcon: "#ecedef",
    colorLinks: "white",
    colorTitleAcess: "white",
    backGroundButton1:"#0ea4c9",
    backGroundButton2:"#0ea4c9",
  };

  const themes = {
    light: LightTheme,
    dark: DarkTheme,
  };

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  

  const icon = theme === "light" ? <FaMoon style={{color:'#f1c40f'}}/> : <FaSun style={{color:'#f39c12'}} />;

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={themes[theme]}>
          
          <PageStyle>
            <HeaderArea >
              <HeaderPage>
                <Logo />
                <>
                  <NavBar/>
                  <ThemeToggle onClick={changeTheme}>{icon}</ThemeToggle>
                </>
              </HeaderPage>
            </HeaderArea>
            <MainArea>
              <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/lembretes" element={<PageUserLembretes/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/configuracoes" element={<UserPageConfigs/>}/>
              </Routes>
            </MainArea>
            <FooterPage>
              <Footer id="pageFooter"/>
            </FooterPage>
          </PageStyle>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default Screen;

//Definindo tamanho e cor da página
export const PageStyle = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundPage};
  transition: 1.2s;
`;

//Botão que altera a o tema dá página
const ThemeToggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.backgroundIcon};
`;

//Header da página
export const HeaderPage = styled.header`
  display: flex;
  padding: 1.3rem 2rem;
  justify-content: space-between;
`

//Informações presentes na tela inicial
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

//Definições da imagem de início
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
export const FooterStyle = styled.footer`
  color: ${(props)=>props.theme.colorLinks};
  display: flex;
  justify-content: center;
  align-items: center;
`

//Estilo da Área de login/cadastro
export const AcessArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        color: ${(props)=>props.theme.colorTitleAcess};
        font-size: 350%;
        margin-bottom: 2.5rem;
    }
    h3{
        color: ${(props)=>props.theme.colorTitleAcess};
        font-size: 150%;
        font-weight: 400;
        margin-bottom: 1.3rem;
    }
`

//Inputs das telas de login/cadastro
export const InputAcess = styled.input`
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 400;
    width: 90%;
    border-radius: 0.3rem;
    border: none;
    outline: none;
    margin-bottom: 1.4rem;
`

//Display do Form de login/cadastro
export const FormAcess = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

//Style do botão de acesso/cadastro
export const ButtonAcess = styled.button`
    width: 90%;
    padding: 1rem 2rem;
    border-radius: 0.3rem;
    border: none;
    font-size: x-large;
    font-weight: 500;
    cursor: pointer;
    background:${(props)=>props.theme.backGroundButton1};
    color: ${(props)=>props.theme.colorTitleAcess};
    box-shadow: 0px 6px 10px -2px #8B8B8B;
    margin-bottom: 1rem;
    transition: all 0.3s;
    :hover{
      box-shadow: 0px 2px 11px 6px rgba(17,197,241,0.71);
    }
`

//
export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: ${(props)=>props.theme.colorTitleAcess};
`

export const AcessP = styled.p`
   color: ${(props)=>props.theme.colorTitleAcess};
   font-weight: 400;
   margin-bottom: 0.8rem;
`

//Botão que alterna entre as telas de login e cadastro
export const ButtonLogCad = styled(ButtonAcess)`
    border: none;
    background:${(props)=>props.theme.backGroundButton2};
    color: ${(props)=>props.theme.colorTitleAcess};
    padding: 1rem 2rem;
    font-size: large;
    width: 70%;
`

export const StyleAsideUser = styled.aside`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  padding: 1rem 0rem 0rem 0rem;
  justify-content: space-between;
  div{
    display: flex;
    flex-direction: column;
  }
`

export const AsideButton = styled.button`
  padding: 1rem 4rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 1.1rem;
  border:none;
  text-align: start;
  background: none;
  transition: all 0.4s;
  border-radius: 0rem 1rem 1rem 0rem;
  
  :hover{
    background-color: #cee5eb;
  }
`

export const AsideButtonSair = styled(AsideButton)`
  margin-bottom: 0rem;
  text-align: center;
  :hover{
    background-color:#B73838;
  }
`

export const AreaUser = styled.section`
  display: flex;
  width: 100%;
  margin: 1rem 1rem;
  border: 1px solid blue;
  border-radius: 1.7rem;
`

export const CardArea = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border: 1px solid green;
  padding: 0.5rem;
`

export const CardList = styled.ul`
  padding: 2rem 1rem;
  width: 100%;
  display: flex;
`
export const Card = styled.li`
  width: 230px;
  min-height: 200px;
  background-color: #fbfb4ac5;
  border-radius: 1.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
  box-shadow: 0px 6px 10px -2px #8B8B8B;
  
`

export const HeaderCard = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: baseline;
`

export const OptionsCard = styled.div`
  button{
    border: none;
    background: none;
    cursor: pointer;
  }
`

export const AddTarefaArea = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    padding: 0.4rem 0.7rem;
    border-radius: 1rem;
    margin-bottom: 0.3rem;
    border: none;
    outline: none;
    width: 80%;
    text-align: center;
  }
`

export const ButtonAddTarefa = styled.button`
  border: none;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;

  :hover{
    background-color: #cee5eb;
  }
`

export const NewCardForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  input{
    width: 80%;
    margin-bottom: 0.4rem;
    padding: 0.7rem;
    outline: none;
    border: none;
    border-radius: 1rem;
    text-align: center;
  }
  button{
    width: 80%;
    border: none;
    padding: 1rem 1.5rem;
    border-radius: 1rem;

    :hover{
      cursor: pointer;
      background: #1EB06A;
    }
  }
`

export const AlterarSenhaArea = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  form{
    display: flex;
    flex-direction: column;
    input{
      padding: 1rem 2rem;
      margin-bottom: 1rem;
      border-radius: 1rem;
    }
  }

  button{
    padding: 1rem 2rem;
    border-radius: 1rem;
    outline: none;
    width: 80%;
  }
`