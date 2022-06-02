import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserPainelStyle } from "../../../Sections/Screen.styled";
import Aside from "../Aside2.0";
import PainelUser from "./PainelUser";

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
      <Aside/>
      <PainelUser/>
    </UserPainelStyle>
  );
}

export default NewUserPage;
