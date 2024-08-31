import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./glogalStyle.styled.js";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./Theme.js";
import { AppRoutes } from "./router/AppRoutes.jsx";
import { UserProvider } from "./context/UserContext";
import { TaskProvider } from "./context/TasksContext";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme);
  }, [isDarkTheme]);

  const currentTheme = isDarkTheme === "dark" ? dark : light;

  return (
    <TaskProvider>
      <UserProvider>
        <ThemeProvider theme={currentTheme}>        
          <GlobalStyle />
            <BrowserRouter>
              <AppRoutes isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
            </BrowserRouter>
        </ThemeProvider>
      </UserProvider>
    </TaskProvider>
  );
}

export default App;
