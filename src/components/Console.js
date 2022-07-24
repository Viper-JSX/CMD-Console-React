import { useState } from "react";
import styled from "styled-components";
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole = styled.textarea`
    width: 100%;
    height: max-content;
    padding: 0px 10px 0px 10px;
    min-height: max-content;
    color: ${(props) => props.theme.color || "white"};
    background-color: ${(props) => props.theme.backgroundColor || "white"};
    border: none;
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
    resize: none;
    user-select: none;
    box-sizing: border-box;
    &:focus{
        outline: none;
        background: ${(props) => props.theme.name === "light" ? "#111111" : "#FFFFFF"};
    }
`;

function Console(props){ 
    return(
        <Flex direction="column" align="left" justify="start" grow="1">
            <Flex id="lines" height={"70vh"} direction={"column"} align="left" ref={props.linesContainerRef} overflow="auto" {...props} padding="0px 10px 0px 10px">
                {
                    props.lines.map((line) => <Line line={line} />)
                }
            </Flex >
            <StyledConsole 
                {...props} 
                value={props.currentLine} 
                ref={props.consoleInputRef}
                onChange={props.handleLineChange} 
                onKeyDown={props.handleConsoleKeyDown} 
                onClick={props.handleConsoleInputClick}
            ></StyledConsole>
        </Flex>
    );
}


export default Console;