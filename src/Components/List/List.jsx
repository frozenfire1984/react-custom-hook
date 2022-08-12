import useFetch from "../../hooks/useFetch"

const List = () => {
	
	const {data, loading, error} = useFetch("https://www.reddit.com/r/news.json")
	
	/*if (loading) return "Loading"
	
	if (error) {
		console.log('error')
		return null
	}*/
	
	return (
		<div className="app">
			<div className="container_">
				
				{loading && <div>...Loading...</div>}
				
				{!loading && data && data.children.map((item, index) => {
					return (
						<div key={index}>{JSON.stringify(item, null, '\t')}</div>
					)
				})}
				
				<p>count: {JSON.stringify(data && data.dist)}</p>
				
				{error && <div className="err">{error}</div>}
			</div>
		</div>
	)
}

export default List