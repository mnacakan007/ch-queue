import React from 'react';
import cup from '~/assets/images/cup.png';
import logo from '~/assets/images/logo.png';
import './HomePage.scss';
import AppLink from '~/shared/ui/AppLink/AppLink';
import { RouteNames } from '~/app/providers/router/config/routeConfig';

const HomePage: React.FC = () => {
	return (
		<div className="choose_platform">
			<h1 className="page_title">Select the platform</h1>
			<AppLink target={'_blank'} to={RouteNames.USERS_LINK} className="secondary_btn" aria-label="log out">
				<img src={cup} alt="" title="" width="171" height="221" />
				<span>Queue</span>
			</AppLink>
			<AppLink target={'_blank'} to={RouteNames.KITCHEN_LINK} className="popup_close standard_btn" aria-label="cancel">
				<img src={logo} alt="" title="" width="193" height="144" />
				<span>Kitchen</span>
			</AppLink>
		</div>
	);
};

export default HomePage;
