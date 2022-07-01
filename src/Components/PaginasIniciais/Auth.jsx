import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

function Auth() {
  const navigate = useNavigate();

  useEffect(() => {
    github();
  });

  const github = async () => {
    const resp = await api.get("/github/redirect", {headers: {"Access-Control-Allow-Origin": "*"}});
    console.log(resp);
  }

  return <div>
    <h1>veio do github</h1>
  </div>;
}

export default Auth;
