import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PickTheme from './PickTheme';

const EnterUserInformation = () => {
	const navigate = useNavigate();

	// Check if user already has a username entered previously
	// If not then give a empty name until user enters a value
	const [ name, setName ] = useState(localStorage.getItem("username") ? 
							JSON.parse(localStorage.getItem("username")) : 
							"");
	const [ remember, setRemember ] = useState(false);

	const handleSubmit = (e) => {
		// Prevent submit button from refreshing page
		e.preventDefault();

		// Set user's username to localStorage if user wants to be remembered
		if(remember) {
			localStorage.setItem("username", JSON.stringify(name));
		} else {
			sessionStorage.setItem("username", JSON.stringify(name));
			localStorage.removeItem("username");
		}

		// Navigate to next page
		navigate("/planning-your-day");
	};

	return(
		<section className="center-of-screen text-color pos-absolute text-center" id="userInformationSection">
			<form onSubmit={handleSubmit}>
				<div classNam="text-color">
					<label htmlFor="name-input">What would you like to be called?</label>
					<input 
					className="text-color form-control rounded-5 mt-3" 
					id="name-input" 
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					/>
					<input 
					className="me-1" 
					type="checkbox" 
					id="remember-me-input-popover"
					checked={remember === true}
					onChange={() => setRemember(remember ? false : true)}/>
					<label htmlFor="remember-me-input-popover" id="remember-me-label">Remember me</label>
				</div>
				<hr/>
				<div className="mt-3">
					<h4>Pick a theme and set the mood:</h4>
					Coming Soon!
				</div>
				<div className="mt-3">
					<p className="f-22">
						<strong>Note:</strong> You can change the theme color and your name in the settings later.
					</p>
					<button 
					type="submit"
					className="btn btn-lg btn-dark btn-theme-1 rounded-5"
					>Continue</button>
				</div>
			</form>
		</section>
	);
};

export default EnterUserInformation;