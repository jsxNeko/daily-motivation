import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { useState, useEffect } from 'react';

const Music = () => {
	const [ src, setSrc ] = useState("https://www.youtube.com/watch?v=cI4ryatVkKw");
	const [ play, setPlay ] = useState(0);

	const popover = (
		  <Popover id="popover-basic">
		    <Popover.Header as="h3">Music Player</Popover.Header>
		    <Popover.Body>
		    	<h6>Pick a song:</h6>
		    	Coming Soon :)
{/*		    	<button className="btn btn-dark me-2" 
		    	onClick={() => setSrc("https://www.youtube.com/watch?v=cI4ryatVkKw")}>
		    	Song 1
		    	</button>
		    	<button className="btn btn-dark me-2" 
		    	onClick={() => setSrc("https://www.youtube.com/watch?v=qsEBaIMCKl4")}>
		    	Song 2
		    	</button>
		    	<button className="btn btn-dark mt-2" 
		    	onClick={() => setSrc("https://www.youtube.com/watch?v=koRbYQyPU0U")}>
		    	Song 3
		    	</button>*/}
		    </Popover.Body>
		  </Popover>
	);

	return(
		<>
			<div className="pos-absolute" id="musicWidget">
				<OverlayTrigger
				placement="left"
				trigger="click"
				overlay={popover}
				rootClose>
				<button className="btn btn-dark btn-theme-1 bi-music-note"></button>
				</OverlayTrigger>
			</div>
		</>
	);
};

export default Music;