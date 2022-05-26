import { CenterArea } from "../../Sections/Screen.styled";
import { AcessArea ,InputAcess , FormAcess , ButtonAcess, AcessP, ButtonLogCad} from "../../Sections/Screen.styled";
import { Link } from "react-router-dom";
import styled from "styled-components";


function Cadastro(){
    return(
        <CenterArea>
            <AcessArea>
                <h2>Cadastro</h2>
                <h3>Para ter acesso aos nossos serviços</h3>
                <h3>efetue seu cadastro</h3>
                <FormAcess>
                    <NameAcess>
                        <InputAcessName placeholder="Nome" type="text" required></InputAcessName>
                        <InputAcessName placeholder="Sobrenome" type="text" required></InputAcessName>
                    </NameAcess>
                    <InputAcess placeholder="Digite seu Email" type="email" required></InputAcess>
                    <InputAcess placeholder="Digite sua Senha" type="password" required></InputAcess>
                    <InputAcess placeholder="Confirme sua Senha" type="password" required></InputAcess>
                </FormAcess>
                <ButtonAcess>Cadastrar</ButtonAcess>
                <AcessP>Já possui conta ?</AcessP>
                <Link to="/login"><ButtonLogCad>Entrar Agora</ButtonLogCad></Link>
            </AcessArea>
        </CenterArea>
    )   
}

export default Cadastro;

export const InputAcessName = styled(InputAcess)`
    width: 45%;
    padding: 1rem;
`

export const NameAcess = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`
