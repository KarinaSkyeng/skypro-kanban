import "./App.css";
import { useState } from "react";
import { GlobalStyle } from "./glogalStyle.styled.js";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./Theme.js";
import { AppRoutes } from "./router/AppRoutes.jsx";

function App() {
 
  const [isDarkTheme, setIsDarkTheme] = useState("light");

  return (
    <ThemeProvider theme={isDarkTheme === "light" ? light : dark}>
      <GlobalStyle />
      <AppRoutes isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />          
    </ThemeProvider>
  );
}

export default App;
