import "../../../../data.json";
// const fs = require("fs");
// const get = require("lodash.get");

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// message: null,
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ],
			events: [ {
				"id": 1,
				"event_name": "Comic Book Panel",
				"date": "2023-10-20",
				"start_time": "10:00 AM",
				"end_time": "11:30 AM",
				"location": "Main Hall",
				"description": "Join us for an exciting panel discussion on the history and future of comic books."
			},
			{
				"id": 2,
				"event_name": "Artist Alley",
				"date": "2023-10-20",
				"start_time": "12:00 PM",
				"end_time": "5:00 PM",
				"location": "Exhibition Hall",
				"description": "Meet your favorite comic book artists and get your comics signed."
			},
			{
				"id": 3,
				"event_name": "Cosplay Contest",
				"date": "2023-10-21",
				"start_time": "2:00 PM",
				"end_time": "4:30 PM",
				"location": "Cosplay Stage",
				"description": "Show off your amazing cosplay skills and win fantastic prizes!"
			},
			{
			"id": 4,
			"event_name": "Superhero Movie Screening",
			"date": "2023-10-21",
			"start_time": "7:00 PM",
			"end_time": "10:00 PM",
			"location": "Cinema Hall",
			"description": "Enjoy a special screening of the latest superhero blockbuster movie."
			},
			{
				"id": 5,
				"event_name": "Comic Book Collectors' Auction",
				"date": "2023-10-22",
				"start_time": "11:00 AM",
				"end_time": "1:30 PM",
				"location": "Auction Hall",
				"description": "Bid on rare and collectible comic books from various eras."
			},
			{
				"id": 6,
				"event_name": "Interactive Workshop: Character Design",
				"date": "2023-10-22",
				"start_time": "3:00 PM",
				"end_time": "4:30 PM",
				"location": "Workshop Room A",
				"description": "Learn the art of character design from industry experts."
			}]
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
