import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../../services/api";

let alreadyAuth = false;

function AuthRedirect() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!alreadyAuth) {
      alreadyAuth = true;
      github();
    }
  });

  const github = async () => {
    try {
      const resp = await api.get(
        `auth/github?code=${searchParams.get("code")}`
      );
      console.log(resp);
      localStorage.setItem("token", resp.data?.token);
      navigate("/paginaPainel");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Não foi possível fazer login com o GitHub"
      );
      navigate("/");
    }
  };

  return (
    <div>
      <h3>Redirecionando para Planner...</h3>
    </div>
  );
}

export default AuthRedirect;
