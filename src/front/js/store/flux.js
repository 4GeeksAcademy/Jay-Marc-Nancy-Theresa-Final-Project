const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			comicVendors: [],
			artVendors: [],
			merchVendors: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			// fetchGetAllComicVendors: async () => {
			// 	fetch("https://comicvine.gamespot.com/api/publishers/?api_key=95a8680d433d9ff13c2e5dd7eb480ff23089772d&format=json&limit=20",{
			// 		method: "GET",
			// 		credentials: "include",
			// 		headers: {
			// 			"Access-Control-Allow-Origin": "https://comicvine.gamespot.com/",
			// 			"Access-Control-Allow-Methods": "GET",
			// 			// "Access-Control-Allow-Credentials": "true",
			// 			// "Access-Control-Allow-Headers": "*",
			// 			"Content-Type": "application/json",
			// 		},
			// 		mode: "cors",
					
			// 	})
			// 	.then((response) => response.json()) 
			// 	// let data = await response.json();
			// 	.then((data) => {
			// 		console.log(data);
			// 		setStore({comicVendors:data.results});
			// 	}) 
			// },
			fetchGetAllComicVendors: () => {
				console.log("HERE")
				fetch(`${process.env.BACKEND_URL}/api/api/comics/publishers`)
				.then((response) => response.json()) 
				.then((data) => {
					console.log(data);
					setStore({comicVendors:data.results});
				}) 
			},
		}
	};
};

export default getState;
