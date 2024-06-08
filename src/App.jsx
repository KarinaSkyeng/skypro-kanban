import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { PopBrowse } from "./components/PopBrowse";
import { PopNewCard } from "./components/PopNewCard";
import { PopUser } from "./components/PopUser";
import './App.css'
import { tasks } from "./components/data";
import {useState} from "react";

function App() {  
    const [cards, setCards] = useState(tasks)

    const addCard = () => {
      const newCard = {
        id: 13,
        date: '30.1.2023',
        topic: "Web Design",
        title: "Новая задача",
        status: "Без статуса",
    }
    setCards([...cards, newCard]);
    }    
  return (
    <div className="wrapper">
        <Header addCard={addCard}/>		
        <Main cards={cards}/>     
        <PopBrowse />
        <PopNewCard />
        <PopUser />
    </div>
    );
}

export default App;
