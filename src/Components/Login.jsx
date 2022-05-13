import { CenterArea } from "../Sections/Screen.styled";
import { AcessArea ,InputAcess , FormAcess , ButtonAcess, AcessP, ButtonLogCad, LinkStyle} from "../Sections/Screen";

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
                <ButtonLogCad><LinkStyle to="/cadastro">Criar agora</LinkStyle></ButtonLogCad>
            </AcessArea>
        </CenterArea>
    )   
}

export default Login; 



