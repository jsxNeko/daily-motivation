import ColorThemes from '../data/ColorThemes';
import { useEffect } from 'react';

const PickTheme = () => {
	const changeTheme = (c) => {
		// last resort method
		// document.body.style.background = c.default || c.bgColor;
		// document.body.style.color = c.bodyColor;
		// document.querySelectorAll('.bi-quote').forEach(el => el.style.color = c.buttonBg)
		// document.querySelectorAll('.text-color').forEach(el => el.style.color = c.fontColor)
		// document.querySelectorAll('.btn-theme-1').forEach(el => {
		// 	el.style.color = c.buttonColor;
		// 	el.style.backgroundColor = c.buttonBg;
		// });
	};

	return(
		ColorThemes.background.map(c => {
			if(c.bgColor) {
				return(
					<button type="button" key={c.bgColor} className="btn btn-light me-2 p-3 rounded-5" onClick={() => changeTheme(c)} style={{backgroundColor: c.bgColor}}></button>
				);
			} else {
				return(
					<><br/><button type="button" key={c.default} className="btn btn-light me-2 mt-2 rounded-5" onClick={() => changeTheme(c)}>Default</button></>
				);
			}
		})
	);
};

export default PickTheme;