import { MoviePainelStyle ,UserPainelStyle} from "../../../Sections/Screen.styled";
import Aside from "../Aside2.0"
import PainelFilmes from "./PainelFilmes";

function MoviesPage() {
  return (
    <MoviePainelStyle>
      <Aside />
      <PainelFilmes/>
    </MoviePainelStyle>
  );
}

export default MoviesPage;

