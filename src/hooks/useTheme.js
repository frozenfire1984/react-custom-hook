import {useState, useEffect} from "react";

const useTheme = () => {
	const [theme, setTheme] = useState("white")
	
	const toggleTheme = () => {
		if (theme !== "dark") {
			localStorage.setItem("theme", "dark")
			setTheme("dark")
		} else {
			localStorage.setItem("theme", "white")
			setTheme("white")
		}
	}
	
	useEffect(() => {
		const t = localStorage.getItem("theme") 
		console.log(t)
	})
	
	useEffect(() => {
		const localTheme = localStorage.getItem("theme")
		
		if (localTheme) {
			setTheme(localTheme)
		}
	},[])
	
	return {theme, toggleTheme}
}

export default useTheme