import '../css/UserInformation.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserInformation = () => {
	// Check if user already has a username entered previously
	// If not then give a empty name until user enters a value
	const [ name, setName ] = useState(localStorage.getItem('username') ? 
							JSON.parse(localStorage.getItem('username')) : 
							'');

	const saveName = (e) => {
		// Prevent button submit from refreshing page
		e.preventDefault();

		// Set user's username to localStorage
		localStorage.setItem('username', JSON.stringify(name));

		// Navigate to next page
	};

	return(
		<section className="userInformationSection">
			<form>
				<div>
					<label htmlFor="name">What would you like to be called?</label>
					<input 
					className="form-control mt-3" 
					id="name" 
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<button 
					className="btn btn-lg btn-continue-introduction rounded-5 mt-4 mb-4"
					onClick={(e) => saveName(e)}
					>Next</button>
					<p id="note-name">
					<strong>Note:</strong> Once your name is entered, you won't have to re-enter it again unless you 
					choose to rename yourself or you are using a different web browser.
					</p>
				</div>
			</form>
		</section>
	);
};

export default UserInformation;