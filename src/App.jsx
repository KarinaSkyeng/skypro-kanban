import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { PopBrowse } from "./components/PopBrowse";
import { PopNewCard } from "./components/PopNewCard";
import { PopUser } from "./components/PopUser";
import './App.css'
import { tasks } from "./components/data";
import {useEffect, useState} from "react";

function App() {  
    const [cards, setCards] = useState(tasks)
    const [isLoading, setIsLoading] = useState(false)

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
  
  return (
    <div className="wrapper">
        <Header addCard={addCard}/>		
        {isLoading ? <p className="loader">Данные загружаются...</p> : <Main cards={cards}/>}     
        <PopBrowse />
        <PopNewCard />
        <PopUser />
    </div>
    );
}

export default App;
