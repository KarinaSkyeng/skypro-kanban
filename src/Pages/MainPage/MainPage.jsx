import { tasks } from "../../components/data.js";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { PopBrowse } from "../../components/PopBrowse";
import { PopNewCard } from "../../components/PopNewCard";
import { PopUser } from "../../components/PopUser";
import { Wrapper, Loader } from "../../glogalStyle.styled.js";

export const MainPage = (isDarkTheme, setIsDarkTheme) => {
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
        <Header addCard={addCard} setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
        {isLoading ? (
          <Loader>Данные загружаются...</Loader>
        ) : (
          <Main cards={cards} />
        )}
        <PopBrowse />
        <PopNewCard />
        <PopUser />
      </Wrapper>
    )
}