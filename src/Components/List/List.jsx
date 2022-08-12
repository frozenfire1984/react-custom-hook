import useFetch from "../../hooks/useFetch"
import './List.scss'

const List = () => {
	
	const source1 = useFetch("https://www.reddit.com/r/news.json")
	const source2 = useFetch("https://jsonplaceholder.typicode.com/todos/")
	
	/*if (loading) return "Loading"
	
	if (error) {
		console.log('error')
		return null
	}*/
	
	return (
		<div className="app">
			<div className="frame">
				<h3 className="frame__title">https://www.reddit.com/r/news.json</h3>
				<div className="frame__content">
					{source1.loading && <div>...Loading...</div>}
					
					{/*{!source1.loading && source1.data && source1.data.data.children.map((item, index) => {
						return (
							<div key={index}>{JSON.stringify(item, null, '\t')}</div>
						)
					})}*/}
					{JSON.stringify(source1.data)}
					
					{source1.error && <div className="err">{source1.error}</div>}
				</div>
			</div>
			
			<div className="frame">
				<h3 className="frame__title">https://jsonplaceholder.typicode.com/todos/</h3>
				<div className="frame__content">
					{source2.loading && <div>...Loading...</div>}
					
					{/*{!source2.loading && source2.data && source2.data.children.map((item, index) => {
						return (
							<div key={index}>{JSON.stringify(item, null, '\t')}</div>
						)
					})}*/}
					{JSON.stringify(source2.data)}
					
					{source2.error && <div className="err">{source2.error}</div>}
				</div>
			</div>
		</div>
	)
}

export default List