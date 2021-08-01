const fetchAPI = async () => {
const url='https://jsonplaceholder.typicode.com/todos'

fetch(url, { 
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
	}
	}).then(response => response.json())
	.then(data => {
		return data 
	})
}





const getAllProducts = async () => {
		const products = await fetchAPI()
		return products

}

export default getAllProducts;