import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserPainelStyle } from "../../Sections/Screen.styled";
import SectionMovies from "../ApiMovies";
import NewAside from "./NewAsiede";

function NewSectionMovies() {
  return (
    <UserPainelStyle>
      <NewAside />
      <SectionMovies />
    </UserPainelStyle>
  );
}

export default NewSectionMovies;
