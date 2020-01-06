import { combineReducers } from "redux";
import initialState from "../redux/state";

const user = (state = [], action) => {
	switch (action.type) {
		case "LOGIN":
			console.log(action.value);
			return Object.assign({}, state, {
				login: action.value
			})
		default:
			return state
	}
};

// const authentication = (state = initialState, action) => {
// 	switch (action.type) {
// 		case "AUTHENTICATE":
// 			console.log("authentication", state);
// 			return {
// 				...state,
// 				authentication: {
// 					login: action.value
// 				}
// 			};
// 		default:
// 			return state;
// 	}
// };

const listings = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_LISTING":
			return [...state, action.value];
		case "REMOVE_LISTING":
			const listings = [...state];
			listings.splice(action.value, 1);
			return listings;
		default:
			return state;
	}
};

export default combineReducers({ initialState, user, listings });