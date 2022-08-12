import './styles/app.scss'
import Form from "./Components/Form/Form";
import List	from "./Components/List/List"
import useTheme from "./hooks/useTheme";
import {useEffect} from "react";

function App() {
	const {theme, toggleTheme} = useTheme()
	
	useEffect(() => {
		//const l = localStorage.getItem("theme")
		//console.log(l)
	},[theme])
	
	return (
		<div className={`app ${theme}`}>
			<Form />
			<button onClick={toggleTheme}>Toggle theme</button>
		</div>
	)
}

export default App;
