import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        name: 'theme',
        color: 'dark'
    })

    const themeChange = () => {
        if (theme.color === 'dark') {
            setTheme(theme => ({ ...theme, color: 'light' }));
        } else {
            setTheme(theme => ({ ...theme, color: 'dark' }));
        }
    };
    return (
        <ThemeContext.Provider value={{ theme, setTheme, themeChange }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;