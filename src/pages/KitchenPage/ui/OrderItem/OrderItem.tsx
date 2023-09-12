import React from 'react';
import './OrderItem.scss';
import Button from '~/shared/ui/Button/Button';

const OrderItem = () => {
	return (
		<div className="order_item prepare_item">
			<div className="item_inner">
				<div className="product_name">Ice Kinder Coffee</div>
				<div className="product_count">Quantity: 1</div>
				<div className="product_ingredients">
					<span>No Sugar</span>
					<span>Caramel</span>
					<span>Milk</span>
				</div>
				<div className="status_btn">
					<Button className={'order status'}>Prepare</Button>
				</div>
			</div>
		</div>
	);
};

export default OrderItem;
