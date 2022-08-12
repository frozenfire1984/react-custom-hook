import './styles/app.scss'
import Form from "./Components/Form/Form";
import List	from "./Components/List/List"
import Info	from "./Components/Info/Info"
import useTheme from "./hooks/useTheme";
import {useEffect, useContext} from "react";
import {ThemeContext} from "./context/ThemeContext";

function App() {
	const {theme, toggleTheme} = useTheme()
	
	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			<div className="app">
				<Form />
				<Info />
			</div>
		</ThemeContext.Provider>
	)
}

export default App;
