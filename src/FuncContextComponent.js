import { useContext } from "react";
import { ThemeContext } from "./UseContextHook";

function FuncContextComponent() {

    const darkTheme = useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return (
        <div style={themeStyles}>
            Function Theme
        </div>
    )
}

export default FuncContextComponent