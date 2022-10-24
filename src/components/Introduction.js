import '../css/Introduction.css';
import { useNavigate } from 'react-router-dom';

const Introduction = () => {
	const navigate = useNavigate();
	return(
		<section className="introduction-section">
			<div id="first-intro">Hello :)</div>
			<div id="second-intro">
				Good Morning<br/>
				Buen Dia<br/>
				Guten Morgen<br/>
			</div>
			<div id="third-intro">Let's get you motivated to continue your day.</div>
			<div id="fourth-intro">
				<p>Start by telling me a little about how you are feeling right now.</p>
				<button className="btn btn-lg btn-continue-introduction rounded-5" onClick={() => navigate('get-started')}>Continue</button>
			</div>
		</section>
	);
};

export default Introduction;