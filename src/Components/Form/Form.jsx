import './Form.scss'
import useInput from "./../../hooks/useInput";

function App() {
	const name = useInput()
	const email = useInput("invalid invalid_extra")
	
	const input_attrs = {type: "text", placeholder: "input", required: true}
	
	return (
		<div className="app">
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
			<hr/>
			<ul>
				<li>Name: {name.value}</li>
				<li>Email: {email.value}</li>
			</ul>
		</div>
	)
}

export default App;
