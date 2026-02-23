import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { lightTheme } from "./styles/theme.jsx";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={lightTheme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
);
