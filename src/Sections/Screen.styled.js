import styled from "styled-components";

export const date = new Date();

export const HeaderArea = styled.header`
`;
export const HeaderPage = styled.header`
    width: 100vw;
    height: 9vh;
    border: 1px solid ${(props)=>props.theme.backgroundIcon};  
    border-top: none;
    border-left: none;
    border-right: none;
    display: flex;
    padding: 1.3rem 2rem;
    justify-content: space-between;
`

export const MainArea = styled.main`
    width: 100vw;
    height: 86vh;
    display: flex;
`;

export const FooterPage = styled.footer`
    width: 100vw;
    height: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props)=>props.theme.colorLinks};
`

export const CenterArea = styled.section`
    width: 100vw;
    height: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const AcessArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        color: ${(props)=>props.theme.colorTitleAcess};
        font-size: 350%;
        margin-bottom: 2.5rem;
    }
    h3{
        color: ${(props)=>props.theme.colorTitleAcess};
        font-size: 150%;
        font-weight: 400;
        margin-bottom: 1.3rem;
    }
`

export const FormAcess = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const InputAcess = styled.input`
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 400;
    width: 90%;
    border-radius: 0.3rem;
    border: none;
    outline: none;
    margin-bottom: 1.4rem;
`

export const ButtonAcess = styled.button`
    width: 90%;
    padding: 1rem 2rem;
    border-radius: 0.3rem;
    border: none;
    font-size: x-large;
    font-weight: 500;
    cursor: pointer;
    background:${(props)=>props.theme.backGroundButton1};
    color: ${(props)=>props.theme.colorTitleAcess};
    box-shadow: 0px 6px 10px -2px #8B8B8B;
    margin-bottom: 1rem;
    transition: all 0.3s;
    :hover{
      box-shadow: 0px 2px 11px 6px rgba(17,197,241,0.71);
    }
`
export const AcessP = styled.p`
   color: ${(props)=>props.theme.colorTitleAcess};
   font-weight: 400;
   margin-bottom: 0.8rem;
   
`

export const ButtonLogCad = styled(ButtonAcess)`
    border: none;
    background:${(props)=>props.theme.backGroundButton2};
    color: ${(props)=>props.theme.colorTitleAcess};
    padding: 1rem 6rem;
    font-size: large;
    width: 100%;
`

export const UserPainelStyle = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
`
export const MoviePainelStyle = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: flex;
`
