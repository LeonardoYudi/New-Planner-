import { HeaderPage } from "../../Sections/Screen.styled";
import AlteracaoSenha from "./AlteracaoSenha";
import Footer from "./Footer";
import Logo from "./Logo";
import NavBar from "./NavBar";

function PageAlteracaoSenha() {
  return (
    <div>
      <HeaderPage>
        <Logo />
        <NavBar />
        <div></div>
      </HeaderPage>
      <AlteracaoSenha />
      <Footer />
    </div>
  );
}

export default PageAlteracaoSenha;
