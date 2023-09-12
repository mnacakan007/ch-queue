import { ORDER_LIST_RELOAD, ORDER_LIST_STATUS_UPDATE, OrdersActionTypes } from '~/store/orders/list/types';

export function listReload(): OrdersActionTypes {
	return {
		type: ORDER_LIST_RELOAD,
	};
}

export function orderStatusUpdate(orderID: string, statusID: string): OrdersActionTypes {
	return {
		type: ORDER_LIST_STATUS_UPDATE,
		data: {
			orderID,
			statusID,
		},
	};
}
