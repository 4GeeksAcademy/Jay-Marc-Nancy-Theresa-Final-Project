import data from "../../../../data.json";

// const fs = require("fs");
// const get = require("lodash.get");

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,

			events: [],
			hotels: [],
			comics: [],
			nerdFact: [],


			

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
			merchVendors: [],
			events: [],
			hotels: [],
      faq_data: [],

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			populateStoreEvents: () => {
				setStore({ events: data.events })
			},
			populateStoreHotels: () => {
				setStore({ hotels: data.hotels })
			},
			getComics: () => {
				setStore({ comics: data.comics })
			},

			login: async (email, password) => {

				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
						{
							email: email,
							password: password
						}
					)
				}

				try {
					const response = await fetch(process.env.BACKEND_URL + "api/token", options)
					if (response.status !== 200) {
						alert("Error!  Response Code: ", response.status)
						return false;
					}
					const data = await response.json()
					console.log("from backend", data)
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token })
					return true;
				}
				catch (error) {
					console.log("login error!")
				}
			},

			logout: async () => {
				sessionStorage.removeItem("token");
				console.log("You are logged out");
				setStore({ token: null });
			},

			syncSessionToken: () => {
				const token = sessionStorage.getItem("token");
				if (token && token !== "" && token !== undefined) {
					setStore({ token: token })
				}
			},

			getMessage: async () => {
				const store = getStore();
				const options = {
					headers: {
						"Authorization": "Bearer " + store.token
					},
				}
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "api/hello", options)
					const data = await resp.json()
					setStore({ message: data.message })

					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},

			getFAQData: () => {
				fetch("../../../../data.json") 
				.then((resp) => resp.json())
				.then((data) => {
					console.log("myString: ", data)
					setStore({ faq_data: data.faq_data })
				} )
				//console log data
		},				


			getUserAdded: async (email, password) => {
				const store = getStore();
				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json",
						// 'Authorization': 'Bearer YOUR_ACCESS_TOKEN' + store.token
					},
					body: JSON.stringify(
						{
							email: email,
							password: password,
						}
					)
				}
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/signup", options)
					if (response.status !== 200) {
						alert("Error!  Response Code: this sucks! ", response.status)
						return false;
					}
					const data = await response.json()
					console.log("from backend", data)
					// setStore({ message: data.msg });
					// sessionStorage.getItem("token", token);
					// setStore({ token: token })
					return true;
				}
				catch (error) {
					console.log("login error!")
				}
			},
			forgotPassword: async (email) => {
				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
						{
							email: email,
						}
					)
				}
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/forgot-password", options)
					if (response.status !== 200) {
						alert("Error!  Response Code: ", response.status)
						return false;
					}
					const data = await response.json()
					console.log("from backend", data)
					return true;
				}
				catch (error) {
					console.log("login error!")
				}
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
				fetch(`${process.env.BACKEND_URL}/api/api/comics/publishers`)
				.then((response) => response.json()) 
				.then((data) => {
					console.log(data);
					setStore({comicVendors:data.results});
				}) 
			},
			getArtVendors: () => {
				fetch("../../../../data.json") 
				.then((resp) => resp.json())
				.then((data) => {
					// console.log("getArtVendors: ", data)
					setStore({ artVendors: data.artVendors })
				} )
				//console.log(data);
			},
			getMerchVendors: () => {
				fetch("../../../../data.json") 
				.then((resp) => resp.json())
				.then((data) => {
					// console.log("getMerchVendors: ", data)
					setStore({ merchVendors: data.merchVendors })
				} )
				//console.log(data);

			},

			getEvents: () => {
				fetch("../../../../data.json") //need to edit the link
					.then((resp) => resp.json())
					.then((data) => {
						console.log("myString: ", data)
						setStore({ events: data.events })
					})
				//console log data


			},

			getNerdFact: async () => {
				const response = await fetch("https://geek-jokes.sameerkumar.website/api?format=json");
				const data = await response.json();
				console.log(data);
				setStore({ nerdFact: data })
			},

			// getComics: async () => {
			// 	const options = {
			// 		method: 'GET',
			// 		headers: {
			// 			"access-control-allow-origin": "*", // Required for CORS support to work
			// 			"Content-Type": "application/json"
			// 		},
			// 	}
			// 	const response = await fetch("https://api.shortboxed.com/comics/v1/new", options);
			// 	let data = await response.json();
			// 	console.log(data);
			// 	setStore({ comics: data })
			// },		
			// getComics: () => {
			// 	const options = {
			// 		method: 'GET',
			// 		headers: {
			// 			"access-control-allow-origin": "*", // Required for CORS support to work
			// 			"Content-Type": "application/json",

			// "hash": "a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey))"
			// },
			// Params: {
			// 	"apikey": "83826f8eaa2ce93cc7d34d102f95df8c",
			// 	"ts": "1",
			// 	"hash": "0d7e8d3e4e4e4e4e4e4e4e4e4e4e4e4e"
			// }
			// };
			// fetch("https://api.shortboxed.com/comics/v1/new", options)
			// 	.then((resp) => resp.json())
			// 	.then((data) => {
			// 		console.log(data)
			// 		setStore({ comics: data })
			// 	})
			// getComics: () => {
			// 	fetch("../../../../data.json")
			// 		.then((resp) => resp.json())
			// 		.then((data) => {
			// 			console.log("myString: ", data)
			// 			setStore({ newComics: data.newComics })
			// 		})
			// }



			// 83826f8eaa2ce93cc7d34d102f95df8c //api key Marvel
			// fetch("http://gateway.marvel.com/v1/public/comics?", options)

			}

		},
	};
};

export default getState;