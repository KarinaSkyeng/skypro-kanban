import { Header } from "./components/Header/Header.jsx";
import { Main } from "./components/Main/Main.jsx";
import { PopBrowse } from "./components/PopBrowse";
import { PopNewCard } from "./components/PopNewCard";
import { PopUser } from "./components/PopUser";
import "./App.css";
import { tasks } from "./components/data";
import { useEffect, useState } from "react";
import { GlobalStyle, Wrapper, Loader } from "./glogalStyle.styled.js";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./Theme.js";

function App() {
  const [cards, setCards] = useState(tasks);
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState("light");

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
    <ThemeProvider theme={isDarkTheme === "light" ? light : dark}>
      <GlobalStyle />
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
    </ThemeProvider>
  );
}

export default App;
