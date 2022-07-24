import styled, { css } from "styled-components";

const StyledThemeSwitch = styled.div`
    width: 3rem;
    height: 1.5rem;
    background-color: rgba(10, 10, 10, 0.5);
    border: 1px solid black;
    border-radius: 3rem;
    overflow: hidden;
    position: relative;
`;

const StyledThemeSwitchSlider = styled.div`
    height: 100%;
    aspect-ratio: 1/1;
    background-color: white;
    border-radius: 50%;
    transition: 0.3s;
    
    ${(props) => props.theme.name === "dark" ? 
    css`
        margin-left: 100%;
        transform: translateX(-100%);
        box-shadow: 15px 15px 15px yellow;
    `
    :
    css`
        margin-left: 0%;
        transform: translateX(0%);
    `
    }
`;


function ThemeSwitch(props){
    return(
        <StyledThemeSwitch onClick={props.handleThemeChange} theme={props.theme}>
            <StyledThemeSwitchSlider />
        </StyledThemeSwitch>
    );
}

export default ThemeSwitch;