import React, { useEffect } from 'react';
import './Order.scss';
import Button from '~/shared/ui/Button/Button';

const Order = () => {
	// const [loading, setLoading] = useState(true);

	useEffect(() => {
		// setTimeout(() => {
		// 	setLoading(false);
		// }, 2000);
	}, []);

	return (
		<li>
			<div className="order_info">
				<div className="order_id">N:3498567098</div>
				<div className="order_desc">MA - Table</div>
			</div>
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
			<div className="order_item ready_item">
				<div className="item_inner">
					<div className="product_name">Cappuccino</div>
					<div className="product_count">Quantity: 1</div>
					<div className="product_ingredients">
						<span>2 in 1</span>
					</div>
					<div className="status_btn">
						<button aria-label="order status">Ready to receive</button>
					</div>
				</div>
			</div>
			<div className="order_item prepare_item">
				<div className="item_inner">
					<div className="product_name">Late</div>
					<div className="product_count">Quantity: 1</div>
					<div className="product_ingredients">
						<span>No Sugar</span>
						<span>Caramel</span>
					</div>
					<div className="status_btn">
						<button aria-label="order status">Prepare</button>
					</div>
				</div>
			</div>
		</li>
	);
};

export default Order;
