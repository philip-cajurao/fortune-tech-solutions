"use client"

import { useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useEffect } from 'react';

export default function ThemeProvider({ children }) {


    const [theme, setTheme] = useState("light");
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (!savedTheme) {
            localStorage.setItem("theme", theme);
        } else {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);

        if (theme == 'light') {
            setDarkTheme(false);
        } else {
            setDarkTheme(true);
        }

    }, [theme, setDarkTheme]);

    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme, theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
