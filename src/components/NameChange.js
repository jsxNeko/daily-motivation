import { useState } from 'react';
import { toast } from 'react-toastify';

const NameChange = () => {
	const [ name, setName ] = useState(localStorage.getItem("username") ? 
							JSON.parse(localStorage.getItem("username")) : 
							"");

	const [ remember, setRemember ] = useState(localStorage.getItem("username") ? 
									true : false);

	const handleSubmit = (e) => {
		// Prevent submit button from refreshing page
		e.preventDefault();

		// Set user's username to localStorage if user chose to be remembered
		if(remember) {
			localStorage.setItem("username", JSON.stringify(name));
			sessionStorage.removeItem('username');
		} else {
			sessionStorage.setItem("username", JSON.stringify(name));
			localStorage.removeItem("username");
		}
		toast.success("Name successfully updated!");
		setTimeout(() => {window.location.reload()},4000);
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