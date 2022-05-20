import styled from "styled-components";

function Logo(){
    return(
        <LogoStyle>
            <span className="first">Plan</span>
            <span className="second">ner</span>
        </LogoStyle>
    )
}

export default Logo;

export const LogoStyle = styled.h1`
    font-size: 250%;
    cursor: pointer;
    .first {
        color: ${(props) => props.theme.titleColor1};
    }
    .second {
        color: ${(props) => props.theme.titleColor2};
    }
`