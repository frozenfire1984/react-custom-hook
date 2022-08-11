import {useState} from "react";

const useInput = () => {
	const [value, setValue] = useState("")
	const [error, setError] = useState(null)
	
	return {
		value,
		error,
		onChange: e => setValue(e.target.value),
		onBlur: e => {
			if(!e.target.value && e.target.required) {
				setError("Required field")
			}
			else {
				setError(null)
			}
		}
	}
}

export default useInput