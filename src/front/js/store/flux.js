import data from "../../../../data.json";

// const fs = require("fs");
// const get = require("lodash.get");

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			error: null,
			// loginSuccess: false,
			// signup: false,
			// passwordReset: false,
			// changePassword: false,
			// forgotPassword: false,
			// passwordRecovery: false,
			user: [],
			events: [],
			hotels: [],
			rkPostCards: [],
			favorites: [],
			comics: [],
			nerdFact: [],
			comicVendors: [],
			artVendors: [],
			merchVendors: [],
			faq_data: []
		},
		actions: {
			initialLoading: () => {
				getActions().populateStoreEvents();
				getActions().populateStoreHotels();
				getActions().fetchRkPostCards();
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
			fetchRkPostCards: () => {
				fetch("https://api.magicthegathering.io/v1/cards?contains=imageUrl&artist=rk%20post")

					.then(response => {
						if (!response.ok) throw Error(response.statusText);
						return response.json();
					})
					.then(data => {
						setStore({ rkPostCards: data.cards })
					})
					.catch(error => console.log("ERROR MESSAGE @ fetchRkPostCards()", error))
			},
			getMessage: async () => {
				const store = getStore();
				const options = {
					headers: {
						"Authorization": "Bearer " + store.token
					},
				}
				try {
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
					})
				//console log data
			},
			getUserAdded: async (email, password, first_name, last_name, phone) => {
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
							first_name: first_name,
							last_name: last_name,
							phone: phone
						}
					)
				}
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/signup", options)
					if (response.status == 500) {
						console.log("Error!  Response Code: ", response.status)
						return false;
					}
					const data = await response.json()
					console.log("from backend", data)
					setStore({ message: data.msg });
					sessionStorage.getItem("token", token);
					setStore({ token: token })
					return true;
				}
				catch (error) {
					console.log("login error!")
				}
			},
			forgotPassword: async (email, token) => {
				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
						{
							email: email,
							token: token
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
			},

			resetPassword: async (email, newPassword, confirmPassword) => {
				const options = {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(
						{
							email: email,
							newPassword: newPassword,
							confirmPassword: confirmPassword
						}
					)
				}
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/reset-password", options)
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
			},

			fetchGetAllComicVendors: () => {
				fetch(`${process.env.BACKEND_URL}/api/api/comics/publishers`)
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setStore({ comicVendors: data.results });
					})
			},
			getArtVendors: () => {
				fetch("../../../../data.json")
					.then((resp) => resp.json())
					.then((data) => {
						// console.log("getArtVendors: ", data)
						setStore({ artVendors: data.artVendors })
					})
				//console.log(data);
			},
			getMerchVendors: () => {
				fetch("../../../../data.json")
					.then((resp) => resp.json())
					.then((data) => {
						// console.log("getMerchVendors: ", data)
						setStore({ merchVendors: data.merchVendors })
					})
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
				setStore({ nerdFact: data.joke })
				return data.joke
			}
		},
	};
};

export default getState;