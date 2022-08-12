import './Form.scss'
import useInput from "./../../hooks/useInput";

function App() {
	//const [value, setValue] = useState('')
	//const [error, setError] = useState(null)
	
	/*const [name, setName] = useState('')
	const [errorName, setErrorName] = useState(null)
	
	const onChangeName = (e) => {
		setName(e.target.value)
	}
	
	const onBlurName = (e) => {
		if (!e.target.value && e.target.required) {
			setErrorName("Is required!")
		} else {
			setErrorName(null)
		}
	}*/
	
	//const [email, setEmail] = useState('')
	//const [errorEmail, setErrorEmail] = useState(null)
	
	const name = useInput()
	const email = useInput("invalid invalid_extra")
	
	return (
		<div className="app">
			<div className="container">
				<form>
					<div className="row">
						<input
							className={name.className}
							type="text"
							placeholder="name"
							required
							onChange={name.onChange}
							onBlur={name.onBlur}
							value={name.value}
						/>
						{name.error && <p className="err">Error: {name.error}</p>}
					</div>
					
					<div className="row">
          <input
						className={email.className}
            type="text"
            placeholder="email"
            required
            onChange={email.onChange}
            onBlur={email.onBlur}
						value={email.value}
          />
						{email.error && <p className="err">Error: {email.error}</p>}
        </div>
				</form>
			</div>
			<hr/>
			<ul>
				{name.error && <li className="err">Name: {name.value}</li>}
				{email.error && <li className="err">Email: {email.value}</li>}
			</ul>
		</div>
	)
}

export default App;
