import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { PopBrowse } from "./components/PopBrowse/PopBrowse";
import { PopNewCard } from "./components/PopNewCard/PopNewCard";
import { PopUser } from "./components/PopUser/PopUser";
import './App.css'
import { tasks } from "./components/data";
import {useEffect, useState} from "react";
import { GlobalStyle, Wrapper} from "./globalStyle.styled";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme";

function App() {  
    const [cards, setCards] = useState(tasks)
    const [isLoading, setIsLoading] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(light);

    const addCard = () => {
      const newCard = {
        id: cards.length + 1,
        date: '30.1.2023',
        topic: "Web Design",
        title: "Новая задача",
        status: "Без статуса",
    }
    setCards([...cards, newCard]);
    }  

    useEffect(() => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)    
    }, []);

    const toggleTheme = () => {
      setIsDarkTheme(prevTheme => !prevTheme);
  };
  
  return (
    <ThemeProvider theme={isDarkTheme === "light" ? light : dark}>
    <GlobalStyle/>
    <Wrapper>
        <Header addCard={addCard} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />		
        {isLoading ? <p className="loader">Данные загружаются...</p> : <Main cards={cards}/>}     
        <PopBrowse />
        <PopNewCard />
        <PopUser />
    </Wrapper>
    </ThemeProvider>
    
    );
}

export default App;
