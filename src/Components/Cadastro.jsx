import { CenterArea } from "../Sections/Screen.styled";
import { AcessArea ,InputAcess , FormAcess , ButtonAcess, AcessP, ButtonLogCad, LinkStyle} from "../Sections/Screen";
import { Link } from "react-router-dom";


function Cadastro(){
    return(
        <CenterArea>
            <AcessArea>
                <h2>Cadastro</h2>
                <h3>Para ter acesso aos nossos serviços</h3>
                <h3>efetue seu cadastro</h3>
                <FormAcess>
                    <InputAcess placeholder="Digite seu Email" type="email" required></InputAcess>
                    <InputAcess placeholder="Digite sua Senha" type="password" required></InputAcess>
                    <InputAcess placeholder="Confirme sua Senha" type="password" required></InputAcess>
                </FormAcess>
                <ButtonAcess>Cadastro</ButtonAcess>
                <AcessP>Já possui conta ?</AcessP>
                <ButtonLogCad><LinkStyle to="/login">Entrar agora</LinkStyle></ButtonLogCad>
            </AcessArea>
        </CenterArea>
    )   
}

export default Cadastro;
