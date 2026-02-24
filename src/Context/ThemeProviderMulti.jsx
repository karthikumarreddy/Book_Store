import { createContext, useState } from "react";
import { darkTheme, lightTheme } from "../styles/theme";

export const ThemeContext = createContext();

export const ThemeProviderMulti = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
