import {useState} from "react";
import './Form.scss'
//import useInput from "./hooks/useInput";

//import useInput from "./hooks/useInput";

function Form() {
	//const [value, setValue] = useState('')
	//const [error, setError] = useState(null)
	
	const [name, setName] = useState('')
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
	}
	
	const [email, setEmail] = useState('')
	const [errorEmail, setErrorEmail] = useState(null)
	
	const onChangeEmail = (e) => {
		setEmail(e.target.value)
	}
	
	const onBlurEmail = (e) => {
		if (!e.target.value && e.target.required) {
			setErrorEmail("Is required!")
		} else {
			setErrorEmail(null)
		}
	}
	
	return (
		<div className="app">
			<div className="container">
				<form>
					<div className="row">
						<input
							type="text"
							placeholder="name"
							required
							onChange={onChangeName}
							onBlur={onBlurName}
							value={name}
						/>
						<p className="err">Error: {errorName}</p>
					</div>
					
					<div className="row">
						<input
							type="text"
							placeholder="email"
							required
							onChange={onChangeEmail}
							onBlur={onBlurEmail}
						/>
						<p className="err">Error: {errorEmail}</p>
					</div>
				</form>
				<hr/>
				<ul>
					<li className="err">Name: {name}</li>
					<li className="err">Email: {email}</li>
				</ul>
			</div>
		</div>
	)
}

export default Form;
