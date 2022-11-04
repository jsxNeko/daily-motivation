import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
	username: localStorage.getItem("username") ? 
		JSON.parse(localStorage.getItem("username")) 
		: (sessionStorage.getItem("username") ? 
			JSON.parse(sessionStorage.getItem("username"))
			: ""),
	storeUser: false,
};

const reducer = (state, action) => {
	switch(action.type) {
		case "USER":
			return { ...state, 
					username: action.payload.username,
					storeUser: action.payload.storeUser,
					};
		default:
			return state;
	}
};

export const StoreProvider = (props) => {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>
				{props.children}
			</Store.Provider>;
};