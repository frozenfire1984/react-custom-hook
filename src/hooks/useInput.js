import {useState} from "react";

const useInput = (invalidClassName = "invalid") => {
	const [value, setValue] = useState("")
	const [error, setError] = useState(null)
	const [className, setClassName] = useState("")
	
	const onChange = e => setValue(e.target.value)
	
	const onBlur = e => {
		if(!e.target.value && e.target.required) {
			setError("Required field")
			setClassName(invalidClassName)
		}
		else {
			setError(null)
			setClassName("")
		}
	}
	
	return { value, error, className, onChange, onBlur}
}

export default useInput