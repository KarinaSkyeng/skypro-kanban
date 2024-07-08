{/*import "./App.css";*/}
import { useState } from "react";
import { GlobalStyle } from "./glogalStyle.styled.js";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./Theme.js";
import { AppRoutes } from "./router/AppRoutes.jsx";
import { TaskProvider } from "./context/TasksContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";

function App() {
 
  const [isDarkTheme, setIsDarkTheme] = useState("light");

  return (
    <ThemeProvider theme={isDarkTheme === "light" ? light : dark}>
      <UserProvider>
        <TaskProvider>
          <GlobalStyle />
            <AppRoutes isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
          </TaskProvider>
        </UserProvider>         
    </ThemeProvider>
  );
}

export default App;
