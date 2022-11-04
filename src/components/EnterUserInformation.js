import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from './Store';
import { toast } from 'react-toastify';
import PickTheme from './PickTheme';

const EnterUserInformation = () => {
	const navigate = useNavigate();

	const { state, dispatch: ctxDispatch } = useContext(Store);
	const { username } = state;

	const [ name, setName ] = useState("Guest");
	const [ remember, setRemember ] = useState(false);

	const handleSubmit = (e) => {
		// Prevent submit button from refreshing page
		e.preventDefault();

		// Set user's username
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
			// If everything works out, navigate to homepage
			navigate("/planning-your-day");	
		} catch (error) {
			toast.error("Something went wrong. Please try again later or report the problem.");
		}
	};

	useEffect(() => {
	},[username])

	return(
		<section className="center-of-screen text-color pos-absolute text-center" id="userInformationSection">
			<form onSubmit={handleSubmit}>
				<div className="text-color">
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