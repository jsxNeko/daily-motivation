import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from './Store';

const Introduction = () => {
	const navigate = useNavigate();

	const { state, dispatch: ctxDispatch } = useContext(Store);
	const { username } = state;

	useEffect(() => {
		// If user has a username already then skip the introductions
		username 
		&&
		setTimeout(() => {
			navigate("/planning-your-day");
		}, 3000);
	},[]);

	return(
		<section className="text-color" id="introductionSection">
			<div>Hello {username && 
				username + " Welcome Back"} :)
			</div>
			{ !username &&
				<>
				<div>
					Good Morning<br/>
					Guten Morgen<br/>
					Buen Dia<br/>
				</div>
				<div>Let's get you started to continue your day.</div>
				<div>
					<p>Start by telling me your name</p>
					<button className="btn btn-lg btn-dark btn-theme-1 rounded-5" onClick={() => navigate("/get-started")}>Continue</button>
				</div>
				</>
			}
		</section>
	);
};

export default Introduction;