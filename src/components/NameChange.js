import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { Store } from './Store';

const NameChange = () => {
	const { state, dispatch: ctxDispatch } = useContext(Store);
	const { username, storeUser } = state;

	const [ name, setName ] = useState(username);
	const [ remember, setRemember ] = useState(storeUser);

	const handleSubmit = (e) => {
		// Prevent submit button from refreshing page
		e.preventDefault();

		// Set user's username to local if want to be remembered
		try {
			ctxDispatch({
				type: 'USER',
				payload: {
						"username": name,
						"storeUser": remember 
						},
			});
			if(remember) {
				localStorage.setItem("username", JSON.stringify(name));	
			} else {
				sessionStorage.setItem("username", JSON.stringify(name));
				localStorage.removeItem("username");
			}
			toast.success("Name changed successfully")
		} catch (error) {
			toast.error("Something went wrong. Please try again later or report the problem.");
		}
	};

	return(
		<form onSubmit={handleSubmit}>
			<div>
				<h6>Change Name:</h6>
				<input 
				className="form-control text-color w-100 mt-3" 
				id="name-change-input" 
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				/>
				<button 
				type="submit" 
				className="btn btn-sm pos-absolute text-color"
				id="submit-name-change">
				Submit
				</button>
			</div>
			<div className="mt-2">
				<input 
				className="me-1" 
				type="checkbox" 
				id="remember-me-input"
				checked={remember === true}
				onChange={() => setRemember(remember ? false : true)}/>
				<label htmlFor="remember-me-input" id="remember-me-label">Remember me</label>
			</div>
		</form>
	);
};

export default NameChange;