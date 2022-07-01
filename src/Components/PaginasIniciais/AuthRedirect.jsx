import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function AuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    github();
  });

  const github = async () => {
    const resp = await api.get("auth/github");
    console.log(resp);
  }

  return <div>
    <h1>veio do github</h1>
  </div>;
}

export default AuthRedirect;
