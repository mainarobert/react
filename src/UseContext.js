import { createContext } from 'react'
import { useState } from 'react';
import FuncContextComponent from './FuncContextComponent'

export const ThemeContext = createContext();


function UseContext() {
    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <>
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <FuncContextComponent />
            </ThemeContext.Provider>
        </>
    )
}

export default UseContext
