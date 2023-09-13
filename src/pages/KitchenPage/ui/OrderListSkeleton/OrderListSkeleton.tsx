import React from 'react';

import './OrderListSkeleton.scss';
import { Skeleton } from '~/shared/ui/Skeleton';

const OrderListSkeleton = () => {
	return (
		<ul className="orders_list skeleton_block">
			{new Array(6).fill(null).map((_, index) => (
				<li key={index}>
					<div className="order_info">
						<Skeleton width={220} height={28} className={'order_id'} number={1} border={'4px'} />
						<Skeleton width={180} height={24} className={'order_desc'} number={1} border={'4px'} />
					</div>
					<Skeleton width={268} height={181} className={'item_inner'} number={2} />
				</li>
			))}
		</ul>
	);
};

export default OrderListSkeleton;
