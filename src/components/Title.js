import styled from 'styled-components';

const StyledTitle = styled.h1`
    color: ${(props) => props.color || "white"};
    text-align: center;
`;

function Title( props ){
    return(
        <StyledTitle {...props} >{props.children}</StyledTitle>
    );
}

export default Title;
