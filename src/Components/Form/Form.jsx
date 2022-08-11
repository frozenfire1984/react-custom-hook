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
	
	const {value, error, onChange, onBlur} = useInput()
	
	return (
		<div className="app">
			<div className="container">
				<form>
					<div className="row">
						<input
							type="text"
							placeholder="name"
							required
							onChange={onChange}
							onBlur={onBlur}
							value={value}
						/>
						<p>Error: {error}</p>
					</div>
					
					{/*<div className="row">
          <input
            type="text"
            placeholder="email"
            required
            onChange={e => {
              setEmail(e.target.value)
            }}
            onBlur={e => {
              if (!e.target.value && e.target.required) {
                setErrorEmail("Is required!")
              } else {
                setErrorEmail(null)
              }
            }}
          />
          <p>Error: {errorEmail}</p>
        </div>*/}
				</form>
			</div>
			<hr/>
			<ul>
				<li>Name: {value}</li>
				{/*<li>Email: {email}</li>*/}
			</ul>
		</div>
	)
}

export default App;
