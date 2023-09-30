import data from "../../../../data.json";
// const fs = require("fs");
// const get = require("lodash.get");

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			events: [],
			hotels: [],
			rkPostCards: []
		},
		actions: {
			initialLoading: () => {
				getActions().populateStoreEvents();
				getActions().populateStoreHotels();
				getActions().fetchRkPostCards();
			},
			populateStoreEvents: () => {
				setStore({events: data.events})
			},
			populateStoreHotels: () => {
				setStore({hotels: data.hotels})
			},
			fetchRkPostCards: () => {
				fetch("https://api.magicthegathering.io/v1/cards?contains=imageUrl&artist=rk%20post")

				.then(response => {
					if (!response.ok) throw Error(response.statusText);
					return response.json();
				})
				.then(data => {
					setStore({rkPostCards: data.cards})
				})
				.catch(error => console.log("ERROR MESSAGE @ fetchRkPostCards()", error))
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
			
			getEvents: () => {
				fetch("../../../../data.json") //need to edit the link
				.then((resp) => resp.json())
				.then((data) => {
					console.log("myString: ", data)
					setStore({ events: data.events })
				} )
				//console log data
			}
		}
	};
};

export default getState;
