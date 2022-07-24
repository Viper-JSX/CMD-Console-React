import styled from "styled-components";


const StyledLine = styled.div`
    width: 100%;
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
    word-break: break-all;
`;

function Line(props){
    return(
        <StyledLine {...props}>{props.line}</StyledLine>
    );
}


export default Line;