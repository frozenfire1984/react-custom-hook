import {createContext} from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext(null)

export const ThemeProvider = ({children}) => {
	const {theme, toggleTheme} = useTheme()
	
	return <ThemeContext.Provider value={{theme, toggleTheme}}>
		{children}
	</ThemeContext.Provider>
}