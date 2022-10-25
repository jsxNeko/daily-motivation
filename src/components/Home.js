import '../css/Home.css';
import { useState, useEffect } from 'react';
import ColorThemes from '../data/ColorThemes';

const Home = () => {
	// Check if user has previously selected a color
	// If not, select the default background color
	const [ color, setColor ] = useState(localStorage.getItem("background") ? 
										JSON.parse(localStorage.getItem("background")) :
										'#9eb4e7');

	const changeTheme = (c) => {
		setColor(c);
		localStorage.setItem("background", JSON.stringify(c));
		document.body.style.backgroundColor = JSON.parse(localStorage.getItem("background"));
	};

	return(
		<section id="homeSection">
			<div className="home-grid">
				<div className="home-item">
					<p>Change color theme:</p>
					{
						// Loop through ColorThemes JSON and return color picker buttons
						ColorThemes.background.map(c => {
							if(c.color) {
								return(
									<button className="btn btn-light me-3 p-3 rounded-5" onClick={() => changeTheme(c.color)} style={{backgroundColor: c.color}}></button>
								);
							} else {
								return(
									<><br/><button className="btn btn-light mt-3 rounded-5" onClick={() => changeTheme(c.default)}>Default</button></>
								);
							}
						})
					}
				</div>
				<div className="home-item">
					<div>
						<label htmlFor="mood">Type what you are feeling right now:</label>
						<input className="form-control mt-3" id="mood" type="text"/>
					</div>
					<div className="mt-2">
						<p>Suggestions:</p>
						<button className="btn btn-transparent rounded-5 me-2">
							Down
						</button>
						<button className="btn btn-transparent rounded-5 me-2">
							Bored
						</button>
						<button className="btn btn-transparent rounded-5 me-2">
							Anxious
						</button>
						<button className="btn btn-transparent rounded-5 me-2">
							Lazy
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;