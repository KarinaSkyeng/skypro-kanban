
import { useEffect, useState } from "react";
import { Header } from "../../components/Header/Header.jsx";
import { Main } from "../../components/Main/Main.jsx";
import { PopNewCard } from "../../components/PopNewCard";
import { Wrapper, Loader } from "../../glogalStyle.styled.js";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api/tasks.js";
import { useUserContext } from "../../context/useUserContext";

export const MainPage = ({isDarkTheme, setIsDarkTheme}) => {
    const { user, setUser } = useUserContext();
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
        console.log("user:", user);       
        if (!user || !user.token) {
          console.error("Пользователь не авторизован");
          setError("Пользователь не авторизован");
          setIsLoading(false);
          return;
        }

        setIsLoading(true);
        getTasks(user.token)
        .then((res) => {
          setCards(res.tasks)         
        })
        .catch((error) => {
          console.log("Error loading tasks:", error.message);
          setError(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });        
      },[user]);
   
    return (
        <Wrapper>
          <Outlet/>
            <Header addCard={addCard} setUser={setUser} setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
            {isLoading ? (<Loader>Данные загружаются...</Loader>) : error ? <p>{error}</p> : (<Main cards={cards} />) }        
          <PopNewCard />        
        </Wrapper>
    );
}