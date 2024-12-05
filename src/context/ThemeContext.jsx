import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeUser = {
    theme,
    onToggle: handleToggleTheme,
  };
  return (
    <ThemeContext.Provider value={themeUser}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
