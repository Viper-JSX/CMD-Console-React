import styled from "styled-components";

const StyledFlex = styled.div`
    width: 100vw;
    max-height: ${(props) => props.height || "auto"};
    padding: ${(props) => props.padding || 0};
    color: ${(props) => props.theme.color || "white"};
    background-color: ${(props) => props.theme.backgroundColor || "white"};
    display: flex;
    justify-content: ${(props) => props.justify || "start"};
    align-items: ${(props) => props.align || "start"};
    flex-direction: ${(props) => props.direction || "row"};
    flex-grow: ${(props) => props.grow? props.grow : 0};
    overflow: ${(props) => props.overflow || "auto"};
    @media (max-width: 600px){
        background-color: red;
    }
`;

function Flex(props){
    return(
        <StyledFlex className="flex" {...props} ref={props.linesContainerRef ? props.linesContainerRef : null }>
            {props.children}
        </StyledFlex>
    );
}

export default Flex;