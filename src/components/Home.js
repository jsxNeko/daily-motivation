import '../css/Home.css';
import { useState } from 'react';
import Select from 'react-select';
import ColorThemes from '../data/ColorThemes';
import Moods from '../data/Moods';

const Home = () => {
	const [ mood, setMood ] = useState("");

	const changeTheme = (c) => {
		localStorage.setItem("background", JSON.stringify(c));
		document.body.style.backgroundColor = JSON.parse(localStorage.getItem("background"));
	};

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
	})

	return(
		<section id="homeSection">
			<div className="home-grid">
				<div className="home-item1">
					<p>Change color theme:</p>
					{
						// Loop through ColorThemes JSON and return color picker buttons
						ColorThemes.background.map(c => {
							if(c.color) {
								return(
									<button key={c.color} className="btn btn-light me-2 mb-3 p-3 rounded-5" onClick={() => changeTheme(c.color)} style={{backgroundColor: c.color}}></button>
								);
							} else {
								return(
									<><br/><button key={c.default} className="btn btn-light rounded-5" onClick={() => changeTheme(c.default)}>Default</button></>
								);
							}
						})
					}
				</div>
				<div className="home-item2">
					<div>
						<label htmlFor="mood">How are you feeling right now:</label>
						<Select
						className="mt-2"
						id="mood-input"
						placeholder="Ex: sad, bored"
						styles={customStyles}
						theme={customThemes}
						options={Moods}>
						</Select>
					</div>

					<div className="mt-2">
						<p>Suggestions:</p>
						<button className="btn btn-transparent rounded-5 me-1">
							Down
						</button>
						<button className="btn btn-transparent rounded-5 me-1">
							Bored
						</button>
						<button className="btn btn-transparent rounded-5 me-1">
							Lazy
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;