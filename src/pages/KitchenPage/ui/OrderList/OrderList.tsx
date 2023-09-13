import React, { useEffect, useRef, useState } from 'react';
import { TabButton } from '~/components/TabButton';
import './OrderList.scss';
import Order from '../Order/Order';
import OrderListSkeleton from '../OrderListSkeleton/OrderListSkeleton';
import { useDispatch } from 'react-redux';
import { listReload } from '~/store/orders/list/actions';

const tabs = [{ title: 'All' }, { title: 'Overdue' }, { title: 'Ready to receive' }, { title: 'Prepare' }];

const OrderList = () => {
	const [selectedTabIndex, setSelectedTabIndex] = useState(0);
	const indicatorRef = useRef<HTMLHeadingElement>(null);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect((): void => {
		dispatch(listReload());
	}, [dispatch]);

	useEffect(() => {
		const element = document.querySelector<HTMLElement>('.tab_btns .selected');
		activateIndicator(element);

		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, [selectedTabIndex]);

	function activateIndicator(element: HTMLElement | null): void {
		if (indicatorRef?.current && element) {
			indicatorRef.current.style.width = element.clientWidth + 'px';
			indicatorRef.current.style.left = element.offsetLeft + 'px';
		}
	}

	const logout = () => {
		document.querySelector('body')?.classList.add('popup_opened');
		document.querySelector('.logout_popup')?.classList.add('showed');
	};

	const onChangeFilterTab = (index: number): void => {
		setSelectedTabIndex(index);
	};

	return (
		<div className="kitchen_page">
			<div className="page_head">
				<div className="tab_btns">
					{tabs.map((tab, index) => (
						<TabButton
							key={index}
							title={tab.title}
							click={() => onChangeFilterTab(index)}
							selected={selectedTabIndex === index}
						/>
					))}
					<span ref={indicatorRef} className="indicator" />
				</div>
				<button onClick={logout} className="logout_btn" aria-label="logout">
					Log out
				</button>
			</div>

			{!loading ? (
				<ul className="orders_list">
					<Order />
					{/*<li>*/}
					{/*	<div className="order_info">*/}
					{/*		<div className="order_id">N:3498567098</div>*/}
					{/*		<div className="order_desc">MA - Table</div>*/}
					{/*	</div>*/}
					{/*	<div className="order_item prepare_item">*/}
					{/*		<div className="item_inner">*/}
					{/*			<div className="product_name">Ice Kinder Coffee</div>*/}
					{/*			<div className="product_count">Quantity: 1</div>*/}
					{/*			<div className="product_ingredients">*/}
					{/*				<span>No Sugar</span>*/}
					{/*				<span>Caramel</span>*/}
					{/*				<span>Milk</span>*/}
					{/*			</div>*/}
					{/*			<div className="status_btn">*/}
					{/*				<Button className={'order status'}>Prepare</Button>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*	<div className="order_item ready_item">*/}
					{/*		<div className="item_inner">*/}
					{/*			<div className="product_name">Cappuccino</div>*/}
					{/*			<div className="product_count">Quantity: 1</div>*/}
					{/*			<div className="product_ingredients">*/}
					{/*				<span>2 in 1</span>*/}
					{/*			</div>*/}
					{/*			<div className="status_btn">*/}
					{/*				<button aria-label="order status">Ready to receive</button>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*	<div className="order_item prepare_item">*/}
					{/*		<div className="item_inner">*/}
					{/*			<div className="product_name">Late</div>*/}
					{/*			<div className="product_count">Quantity: 1</div>*/}
					{/*			<div className="product_ingredients">*/}
					{/*				<span>No Sugar</span>*/}
					{/*				<span>Caramel</span>*/}
					{/*			</div>*/}
					{/*			<div className="status_btn">*/}
					{/*				<button aria-label="order status">Prepare</button>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</li>*/}
					{/*<li>*/}
					{/*	<div className="order_info">*/}
					{/*		<div className="order_id">N:3498567099</div>*/}
					{/*		<div className="order_desc">MA - Table</div>*/}
					{/*	</div>*/}
					{/*	<div className="order_item overdue_item">*/}
					{/*		<div className="item_inner">*/}
					{/*			<div className="product_name">Dalgona coffee</div>*/}
					{/*			<div className="product_count">Quantity: 4</div>*/}
					{/*			<div className="status_btn">*/}
					{/*				<button aria-label="order status">Overdue</button>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*	<div className="order_item overdue_item">*/}
					{/*		<div className="item_inner">*/}
					{/*			<div className="product_name">Iced caramel macchiato</div>*/}
					{/*			<div className="product_count">Quantity: 4</div>*/}
					{/*			<div className="status_btn">*/}
					{/*				<button aria-label="order status">Overdue</button>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</li>*/}
					{/*<li>*/}
					{/*	<div className="order_info">*/}
					{/*		<div className="order_id">N:3498567100</div>*/}
					{/*		<div className="order_desc">MA - Table</div>*/}
					{/*	</div>*/}
					{/*	<div className="order_item prepare_item">*/}
					{/*		<div className="item_inner">*/}
					{/*			<div className="product_name">Iced latte</div>*/}
					{/*			<div className="product_count">Quantity: 7</div>*/}
					{/*			<div className="product_ingredients">*/}
					{/*				<span>No Sugar</span>*/}
					{/*				<span>No honey</span>*/}
					{/*				<span>Milk</span>*/}
					{/*			</div>*/}
					{/*			<div className="status_btn">*/}
					{/*				<button aria-label="order status">Prepare</button>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*	<div className="order_item prepare_item">*/}
					{/*		<div className="item_inner">*/}
					{/*			<div className="product_name">Iced mocha</div>*/}
					{/*			<div className="product_count">Quantity: 1</div>*/}
					{/*			<div className="product_ingredients">*/}
					{/*				<span>Dark chocolate buttons</span>*/}
					{/*			</div>*/}
					{/*			<div className="status_btn">*/}
					{/*				<button aria-label="order status">Prepare</button>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*	<div className="order_item prepare_item">*/}
					{/*		<div className="item_inner">*/}
					{/*			<div className="product_name">Mocha</div>*/}
					{/*			<div className="product_count">Quantity:1</div>*/}
					{/*			<div className="product_ingredients">*/}
					{/*				<span>Dark chocolate buttons</span>*/}
					{/*				<span>Caramel</span>*/}
					{/*				<span>Double cream</span>*/}
					{/*			</div>*/}
					{/*			<div className="status_btn">*/}
					{/*				<button aria-label="order status">Prepare</button>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*	<div className="order_item ready_item">*/}
					{/*		<div className="item_inner">*/}
					{/*			<div className="product_name">Espresso old fashioned</div>*/}
					{/*			<div className="product_count">Quantity: 2</div>*/}
					{/*			<div className="product_ingredients">*/}
					{/*				<span>Sugar syrup</span>*/}
					{/*			</div>*/}
					{/*			<div className="status_btn">*/}
					{/*				<button aria-label="order status">Ready to receive</button>*/}
					{/*			</div>*/}
					{/*		</div>*/}
					{/*	</div>*/}
					{/*</li>*/}
					{/*<li>*/}
					{/*	<div className="order_info">*/}
					{/*		<div className="order_id">N:3498567098</div>*/}
					{/*		<div className="order_desc">MA - Table</div>*/}
					{/*	</div>*/}
					{/*	<></>*/}
					{/*</li>*/}
					{/*<li>*/}
					{/*	<div className="order_info">*/}
					{/*		<div className="order_id">N:3498567098</div>*/}
					{/*		<div className="order_desc">MA - Table</div>*/}
					{/*	</div>*/}
					{/*	<></>*/}
					{/*</li>*/}
					{/*<li>*/}
					{/*	<div className="order_info">*/}
					{/*		<div className="order_id">N:3498567098</div>*/}
					{/*		<div className="order_desc">MA - Table</div>*/}
					{/*	</div>*/}
					{/*	<></>*/}
					{/*</li>*/}
					{/*<li>*/}
					{/*	<div className="order_info">*/}
					{/*		<div className="order_id">N:3498567098</div>*/}
					{/*		<div className="order_desc">MA - Table</div>*/}
					{/*	</div>*/}
					{/*	<></>*/}
					{/*</li>*/}
				</ul>
			) : (
				<OrderListSkeleton />
			)}
		</div>
	);
};

export default OrderList;
