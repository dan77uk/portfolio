import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme ? JSON.parse(storedTheme) : "light");
  }, []);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", JSON.stringify("dark"));
    } else {
      setTheme("light");
      localStorage.setItem("theme", JSON.stringify("light"));
    }
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}
