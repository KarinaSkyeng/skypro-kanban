import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./glogalStyle.styled.js";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./Theme.js";
import { AppRoutes } from "./router/AppRoutes.jsx";
import { UserProvider } from "./context/UserContext";
import { TaskProvider } from "./context/TasksContext";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState("light");
  const currentTheme = isDarkTheme === "dark" ? dark : light;

  return (
    <ThemeProvider theme={currentTheme}>
  <UserProvider>
        <TaskProvider>
          <GlobalStyle />
            <BrowserRouter>
              <AppRoutes isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
            </BrowserRouter>          
        </TaskProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
