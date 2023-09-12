import React from 'react';
import './KitchenPage.scss';
import { LogoutPopup } from '~/components/LogoutPopup';
import OrderList from '../OrderList/OrderList';

const KitchenPage: React.FC = () => {
	return (
		<>
			<OrderList />
			<LogoutPopup />
		</>
	);
};

export default KitchenPage;
