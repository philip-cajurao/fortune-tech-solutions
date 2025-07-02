"use client"

import { useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useEffect } from 'react';

export default function Theme({ children }) {
    const [theme, setTheme] = useState('light');
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (theme == "black") {
            setDarkTheme(true);
        } else {
            setDarkTheme(false);
        }

    }, [theme, setDarkTheme]);

    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme, theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
