import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserPainelStyle } from "../../Sections/Screen.styled";
import NewAside from "./NewAsiede";
import NewCardSpace from "./NewCardSpace";

function NewUserPage() {
  const navigate = useNavigate();

  const verificarLogin = async () => {
    if (!localStorage.getItem("token")) navigate("/login");
  };

  useEffect(() => {
    verificarLogin();
  });

  return (
    <UserPainelStyle>
      <NewAside />
      <NewCardSpace />
    </UserPainelStyle>
  );
}

export default NewUserPage;
