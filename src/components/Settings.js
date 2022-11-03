import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import PickTheme from './PickTheme';
import NameChange from './NameChange';

const Settings = () => {
	const popover = (
		  <Popover id="popover-basic">
		    <Popover.Header as="h3">Settings</Popover.Header>
		    <Popover.Body>
		    	<h6>Pick a new theme:</h6>
		    	Coming Soon
		    	<hr/>
		    	<NameChange/>
		    </Popover.Body>
		  </Popover>
	);

	return(
		<div className="pos-absolute" id="settingsWidget">
			<OverlayTrigger
			placement="left"
			trigger="click"
			overlay={popover}
			rootClose>
				<button 
				className="btn btn-dark btn-theme-1 bi-gear"
				></button>
			</OverlayTrigger>
		</div>
	);
};

export default Settings;