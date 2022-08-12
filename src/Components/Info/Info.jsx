import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";

const Info = () => {
	const {toggleTheme} = useContext(ThemeContext)
	return (
		<div>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, vel?
			<button onClick={toggleTheme}>Toggle theme</button>
		</div>
	)
}

export default Info