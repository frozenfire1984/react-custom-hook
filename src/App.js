import './styles/app.scss'
import Form from "./Components/Form/Form";
import Info	from "./Components/Info/Info"
import {ThemeProvider} from "./context/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<div className="app">
				<Form />
				<Info />
			</div>
		</ThemeProvider>
	)
}

export default App;
