//import { tasks } from "../../components/data.js";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { PopNewCard } from "../../components/PopNewCard";
import { Wrapper, Loader } from "../../glogalStyle.styled.js";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api/tasks.js";

export const MainPage = ({isDarkTheme, setIsDarkTheme, user, setUser}) => {
    const [cards, setCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    const addCard = () => {
        const newCard = {
          id: cards.length + 1,
          date: "30.1.2023",
          topic: "Web Design",
          title: "Новая задача",
          status: "Без статуса",
        };
        setCards([...cards, newCard]);
      };
    
      useEffect(() => {
        getTasks(user.token)
        .then((res) => {
          setCards(res.tasks)         
        })
        .catch((error) => {
          console.log(error.message)
          setError(error.message)
        })
        .finally(() => {
          setIsLoading(false)
        })
        //setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      });
   
    return (
        <Wrapper>
        <Outlet/>
        <Header addCard={addCard} setUser={setUser} setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
        {isLoading ? (<Loader>Данные загружаются...</Loader>) : error ? <p>{error}</p> : (<Main cards={cards} />) }
        {/*<PopBrowse />*/}
        <PopNewCard />
        {/*<PopUser />*/}
        </Wrapper>
    )
}