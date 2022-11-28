import { createContext, useContext, useState, useEffect } from "react"
import React from 'react'

let ThemeContext = createContext();

export let ThemeProvider =({children})=>{
    let [theme, setTheme] = useState(localStorage.getItem("theme") || "Light");
    useEffect(()=>{
        localStorage.setItem("theme", theme);
    }, [theme])
    let values = { theme, setTheme };
    
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}
export let useTheme =()=> useContext(ThemeContext);
