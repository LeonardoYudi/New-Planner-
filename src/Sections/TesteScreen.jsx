import { FaSun, FaMoon } from "react-icons/fa";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";
import PageStart from "../Components/PaginasIniciais/pageStart.jsx";
import PageLogin from "../Components/PaginasIniciais/pageLogin.jsx";
import PageCadastro from "../Components/PaginasIniciais/pageCadastro.jsx";

import NewUserConfigs from "../Components/UserPages/PaginaConfig/NewUserConfigs"
import MoviesPage from"../Components/UserPages/PaginaFilmes/-MoviesPage"
import NewUserPage from "../Components/UserPages/PaginaInicial/-UserPage.jsx";
import TarefaPage from "../Components/UserPages/PaginaCards/-TarefaPage";

function NewScreen(){
    const [theme, setTheme] = useState("light");

    const LightTheme = {
      titleColor1: "black",
      titleColor2: "#097b99",
      backgroundPage: "#F6F7F8",
      backgroundIcon: "#292C35",
      colorLinks: "black",
      colorTitleAcess: "#284c54",
      backGroundButton1:"#0ea4c9",
      backGroundButton2:"none",
      white : "#fcfcfc",
      userWork:"#f4f4fc",
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
      white : "#fcfcfc",
      userWork:"#131418",
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

    return(
        <div>
        <BrowserRouter>
            <ThemeProvider theme={themes[theme]}>
                <ThemeToggle onClick={changeTheme}>{icon}</ThemeToggle>
                  <Routes>
                    <Route path="/" element={<PageStart/>}/>
                    <Route path="/login" element={<PageLogin/>}/>
                    <Route path="/cadastro" element={<PageCadastro/>}/>
                    <Route path="/filmes" element={<MoviesPage/>}/>
                    <Route path="/paginaPainel" element={<NewUserPage/>}/>
                    <Route path="/painelTarefa" element={<TarefaPage/>}/>
                    <Route path="/painelConfig" element={<NewUserConfigs/>}/>
                    <Route path="*" element={<PageStart/>}/>
                  </Routes>     
            </ThemeProvider>
        </BrowserRouter>
        </div>
    );
}

export default NewScreen;

const ThemeToggle = styled.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.backgroundIcon};
  position: fixed;
  right: 0;
  margin: 1.3rem 2rem;
`;

export const PageStyle = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundPage};
  transition: 1.2s;
`;
