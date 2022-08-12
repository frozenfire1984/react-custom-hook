import {useContext} from "react";
import Form from "./Components/Form/Form";
import Info	from "./Components/Info/Info"
import {ThemeContext} from "./context/ThemeContext";
import './styles/app.scss'

function App() {
	const {theme} = useContext(ThemeContext)
	return (
		<div className={`app ${theme}`}>
			<Form />
			<Info />
		</div>
	)
}

export default App;
