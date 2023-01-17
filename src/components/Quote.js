import Settings from './Settings';
import Music from './Music';
import axios from 'axios';
import Loader from './Loader';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Quote = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const type = location.state.mood;
	const [ quote, setQuote ] = useState(''); 
	const [ author, setAuthor ] = useState(''); 
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=Inspirational`,
					{headers: {"X-Api-Key": process.env.REACT_APP_APIKEY},
				});
				setQuote(response.data[0].quote);
				setAuthor(response.data[0].author);
				setLoading(false);
			} catch(error) {
				alert(error);
			}
		}
		fetchData();
	},[]);

	return(
		<section id="homeSection">
			<button className="btn btn-light bi-arrow-left pos-absolute" onClick={() => navigate("/planning-your-day")}/>
			<Settings/>
			<Music/>
			{loading ? 
				<Loader/> 
				: 
				<div className="center-of-screen pos-fixed text-center container fadeInAnimation" id="QuoteContainer">
					<h1><i className="bi-quote"/>{quote}</h1>
					<p>- {author}</p>
				</div>
			}
		</section>
	);
};

export default Quote;