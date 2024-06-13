import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { PopBrowse } from "./components/PopBrowse/PopBrowse";
import { PopNewCard } from "./components/PopNewCard/PopNewCard";
import { PopUser } from "./components/PopUser/PopUser";
import './App.css'
import { tasks } from "./components/data";
import {useEffect, useState} from "react";

function App() {  
    const [cards, setCards] = useState(tasks)
    const [isLoading, setIsLoading] = useState(false)
    const [isDarkTheme, setIsDarkTheme] = useState(false);

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
      }, 2000)    
    }, []);

    const toggleTheme = () => {
      setIsDarkTheme(prevTheme => !prevTheme);
  };
  
  return (
    <div className={`wrapper ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
        <Header addCard={addCard} toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />		
        {isLoading ? <p className="loader">Данные загружаются...</p> : <Main cards={cards}/>}     
        <PopBrowse />
        <PopNewCard />
        <PopUser />
    </div>
    );
}

export default App;
