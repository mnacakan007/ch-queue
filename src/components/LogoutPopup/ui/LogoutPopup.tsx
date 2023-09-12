import React, { FC, memo } from 'react';
import './LogoutPopup.scss';

const LogoutPopup: FC = () => {
	const popupClose = () => {
		document.querySelector('body')?.classList.remove('popup_opened');
		document.querySelector('.popup_block')?.classList.remove('showed');
	};

	return (
		<div className="popup_block logout_popup">
			<div className="popup_inner">
				<div className="popup_container">
					<button onClick={popupClose} className="popup_close icon_close" aria-label="popup close">
						Close
					</button>
					<div className="popup_title">Do you want to log out?</div>
					<button className="secondary_btn" aria-label="log out">
						<span>Yes</span>
					</button>
					<button onClick={popupClose} className="popup_close standard_btn" aria-label="cancel">
						<span>No</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default memo(LogoutPopup);
