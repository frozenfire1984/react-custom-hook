import {useEffect, useState} from "react";

const useFetch = (url, options) => {
	
	const [status, setStatus] = useState({
		loading: false,
		data: undefined,
		error: undefined
	})
	
	const fetchNow = (url, options) => {
		setStatus({loading: true})
		fetch(url, options)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.data)
				setStatus({loading: false, data: data.data})
			})
			.catch((err) => {
				setStatus({loading: false, error: "FETCH ERROR"})
			})
	}
	
	useEffect(() => {
		if (url) {
			fetchNow(url, options)
		}
	},[])
	
	return {...status}
}

export default useFetch