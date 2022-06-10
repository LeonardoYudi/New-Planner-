import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Main } from "..";
import { HeaderPage } from "../../Sections/Screen.styled";
import { PageStyle } from "../../Sections/TesteScreen";
import Footer from "./Footer";
import Logo from "./Logo";
import NavBar from "./NavBar";

function PageStart() {
  const navigate = useNavigate();

  useEffect(() => {
    checkOnline();
  });

  const checkOnline = async () => {
    if (localStorage.getItem("token")) navigate("/paginaPainel");
  };

  return (
    <PageStyle>
      <HeaderPage>
        <Logo />
        <NavBar />
        <div></div>
      </HeaderPage>
      <Main />
      <Footer />
    </PageStyle>
  );
}

export default PageStart;
