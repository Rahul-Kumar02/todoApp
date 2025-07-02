import { useContext } from "react";
import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light'
  });

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  localStorage.setItem('theme', theme)

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
};

// custom hook
export const useTheme = () => useContext(ThemeContext)
