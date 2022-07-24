import styled, { css, keyframes } from "styled-components";

const rotateAnimation = keyframes`
    0%{
        transform: rotate(0deg);
    }

    100%{
        transform: rotate(360deg);
    }
`;

const StyledSendButton = styled.button.attrs((prosp) => ({outlined: true}))`
    width: 7rem;
    height: 3rem;

    //&:hover{
    //    animation-name: ${rotateAnimation};
    //    animation-duration: 1s;
    //    animation-iteration-count: infinite;
    //    animation-timing-function: linear;
    //}

    ${(props) => props.primary && css`
        background-color: red;
    `}

    ${(props) =>  props.outlined && css`
        color: ${(props) => props.color || "black"};
        border-color: ${(props) => props.color || "white"};
        background: transparent;
    `}
`;

function SendButton(props){
    return(
        <StyledSendButton {...props} onClick={props.handleSendButtonClick}>{props.children}</StyledSendButton>
    );
}

export default SendButton;