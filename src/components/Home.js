import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store } from './Store';
import Settings from './Settings';
import Music from './Music';

const Home = () => {
	const navigate = useNavigate();

	const { state, dispatch: ctxDispatch } = useContext(Store);
	const { username } = state;

	const [ mood, setMood ] = useState("");
	
	const customStyles = {
		control: (base,state) => ({
			...base,
			background: "rgba(0,0,0,0)",
			borderColor: "#fff",
			boxShadow: state.isFocused ? "0 0 2px 2px #fff" : null,
			color: "#fff",
			"&:hover": {
				borderColor: "#fff",
			},
		}),
		option: base => ({
			...base,
			color: "#1b1b1b"
		}),
		singleValue: base => ({
			...base,
			color: "#fff"
		}),
	};

	const customThemes = (theme) => ({
		...theme,
		colors: {
		    ...theme.colors,
		    neutral20: '#fff',
		    neutral50: '#fff',
		    neutral80: '#fff',
		    primary: "#ffcad8",
		    primary25: "#ffb4c2",
		    primary50: "#ffb4c2",
		},
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/planning-your-day/get-quote", {
			state: {
				mood: mood,
			}
		});
	};

	useEffect(() => {
	},[]);

	return(
		<section id="homeSection">
			<Settings/>
			<Music/>
			<div className="container pos-absolute center-of-screen fadeInAnimation" id="homeContainer">
				<div className="text-center">
					<h2>Hi <em>{username}</em>, What's your goal for the day? To be.. </h2>
					<button 
					type="button" 
					className="btn btn-light btn-lg rounded-5 me-2"
					disabled={mood === "Motivated"}
					onClick={e => setMood(e.target.innerText)}>Motivated</button>
					<button 
					type="button" 
					className="btn btn-light btn-lg rounded-5"
					disabled={mood === "Inspired"}
					onClick={e => setMood(e.target.innerText)}>Inspired</button>
				</div>
				<div className="text-center text-color mt-3">
					<p>Goal of the day: <em>{mood}</em></p>
				</div>
				<div className="mt-3">
					<button 
					type="submit" 
					className="btn btn-lg btn-dark btn-theme-1 center-block w-50 rounded-5 btn-next"
					disabled={!mood}
					onClick={handleSubmit}>
					{mood ? 'Get '+mood: 'Waiting for selection..'}
					</button>
				</div>
			</div>
		</section>
	);
};

export default Home;