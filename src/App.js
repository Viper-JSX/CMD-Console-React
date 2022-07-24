import { useState, useRef, useEffect } from "react";
import './App.css';

import themes from "./various_things/themes";

import styled, { ThemeProvider } from 'styled-components';
import Title from './components/Title';

import Flex from './components/Flex';
import Console from './components/Console';
import SendButton from './components/Send_button';
import ThemeSwitch from "./components/Theme_switch";




const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor || "white"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`



function App() {
  const consolePathTemplate = `C:/users/me${">"}`;

  const [ lines, setLines ] = useState([])
  const [ currentLine, setCurrentLine ] = useState(consolePathTemplate);
  const [theme, setTheme] = useState(themes.light);

  const consoleInputRef = useRef();
  const linesContainerRef = useRef();

  useEffect(() => {
    consoleInputRef.current.selectionStart = consolePathTemplate.length;
    consoleInputRef.current.focus();
  }, []);

  function handleThemeChange(){
    setTheme((prevTheme) => prevTheme.name === "light" ? themes.dark : themes.light);
  }

  function handleLineChange(event){
    setCurrentLine(event.target.value);
  }

  function handleSendButtonClick(){
    console.log(linesContainerRef.current.scrollHeight)
    setLines([...lines, currentLine]);
    setCurrentLine(consolePathTemplate);
    consoleInputRef.current.focus();
    setTimeout(() => linesContainerRef.current.scrollTo(0, linesContainerRef.current.scrollHeight), 30);
  }

  function handleConsoleKeyDown(event){
    if(event.keyCode === 13){
      event.preventDefault();
      setLines([...lines, currentLine]);
      setCurrentLine(consolePathTemplate);
      consoleInputRef.current.focus();
      setTimeout(() => linesContainerRef.current.scrollTo(0, linesContainerRef.current.scrollHeight), 30);
    }
    //To restric caret movement along directory path
    else if((event.target.selectionStart <= consolePathTemplate.length && event.keyCode === 37)){
      event.preventDefault();
    }
    else if(event.keyCode === 8 && event.target.selectionStart <= consolePathTemplate.length){
      event.preventDefault();
    }
  }

  function handleConsoleInputClick(event){
    if(event.target.selectionStart <= consolePathTemplate.length){
      event.target.selectionStart = consolePathTemplate.length
      //event.preventDefault();
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Title color={"green"}>CMD Console by Yura_Viper 2022</Title>
        <Console color={"green"}
          lines={lines} 
          currentLine={currentLine} 
          consoleInputRef={consoleInputRef}
          linesContainerRef={linesContainerRef}
          handleLineChange={handleLineChange} 
          handleConsoleKeyDown={handleConsoleKeyDown} 
          handleConsoleInputClick={handleConsoleInputClick} 
        />

        <Flex justify={"space-between"} align={"center"}>
          <ThemeSwitch handleThemeChange={handleThemeChange} />
          <SendButton outlined={true} color={"green"}
           handleSendButtonClick={handleSendButtonClick} 
          >Send</SendButton>
        </Flex>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
