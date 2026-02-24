import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeProviderMulti";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import { BrowserRouter } from "react-router-dom";

function AppProvider({ children }) {
  const { isDark } = useContext(ThemeContext);
  return (
    <div>
      <ThemeProvider theme={isDark ? lightTheme : darkTheme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export { AppProvider };
