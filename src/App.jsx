import { useState } from "react";
import { GlobalStyle } from "./glogalStyle.styled.js";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./Theme.js";
import { AppRoutes } from "./router/AppRoutes.jsx";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState("light");

  const currentTheme = isDarkTheme === "dark" ? dark : light;

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <AppRoutes isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
    </ThemeProvider>
  );
}

export default App;
