import { tasks } from "../../components/data.js";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { PopNewCard } from "../../components/PopNewCard";
import { Wrapper, Loader } from "../../glogalStyle.styled.js";
import { Outlet } from "react-router-dom";

export const MainPage = ({isDarkTheme, setIsDarkTheme, setIsAuth}) => {
    const [cards, setCards] = useState(tasks);
    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      }, []);
   
    return (
        <Wrapper>
        <Outlet/>
        <Header addCard={addCard} setIsAuth={setIsAuth} setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
        {isLoading ? (<Loader>Данные загружаются...</Loader>) : (<Main cards={cards} />)}
        {/*<PopBrowse />*/}
        <PopNewCard />
        {/*<PopUser />*/}
        </Wrapper>
    )
}