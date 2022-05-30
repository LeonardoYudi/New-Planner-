import { HeaderPage } from "../../Sections/Screen.styled";
import Footer from "./Footer";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Recuperacao from "./Recuperacao";

function PageRecuperacao() {
  return (
    <div>
      <HeaderPage>
        <Logo />
        <NavBar />
        <div></div>
      </HeaderPage>
      <Recuperacao />
      <Footer />
    </div>
  );
}

export default PageRecuperacao;
