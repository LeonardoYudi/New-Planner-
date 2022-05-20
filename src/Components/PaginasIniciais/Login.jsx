import { Link } from "react-router-dom";
import { CenterArea,AcessArea,FormAcess, InputAcess, ButtonAcess, AcessP, ButtonLogCad, LinkStyle } from "../../Sections/Screen.styled";


function Login(){
    return(
        <CenterArea>
            <AcessArea>
                <h2>Login</h2>
                <h3>Para ter acesso aos nossos serviços</h3>
                <h3>efetue seu login</h3>
                <FormAcess>
                    <InputAcess placeholder="Login" type="email" required></InputAcess>
                    <InputAcess placeholder="Senha" type="password" required></InputAcess>
                </FormAcess>
                <ButtonAcess>Login</ButtonAcess>
                <AcessP>Não possui conta ?</AcessP>
                <Link to="/cadastro"><ButtonLogCad>Criar Agora</ButtonLogCad></Link>
            </AcessArea>
        </CenterArea>
    )   
}

export default Login; 



