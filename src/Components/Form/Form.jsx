import './Form.scss'
import useInput from "./../../hooks/useInput";
//import useTheme from "../../hooks/useTheme";

function App() {
	const name = useInput()
	const email = useInput("invalid invalid_extra")
	//const {theme, toggleTheme} = useTheme()
	const input_attrs = {type: "text", placeholder: "input", required: true}
	
	return (
		<>
			<div className="container">
				<form>
					<div className="row">
						<input
							{...input_attrs}
							placeholder="name"
							{...name}
						/>
						{name.error && <p className="err">Error: {name.error}</p>}
					</div>
					
					<div className="row">
          <input
						{...input_attrs}
						placeholder="email"
						{...email}
          />
						{email.error && <p className="err">Error: {email.error}</p>}
        </div>
				</form>
			</div>
			{/*<button onClick={toggleTheme}>Toggle theme</button>*/}
			<hr/>
			<ul>
				<li>Name: {name.value}</li>
				<li>Email: {email.value}</li>
			</ul>
		</>
	)
}

export default App;
