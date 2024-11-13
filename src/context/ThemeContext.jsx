import React, { createContext, useState } from 'react';

const ThemeContext = createContext();
const initialTheme = 'light';
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(initialTheme);
    const changeTheme = (theme) => setTheme(theme);
    const data = { theme, changeTheme };
    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
};
export { ThemeProvider };
export default ThemeContext;
