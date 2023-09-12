export const ORDER_LIST_RELOAD = 'ORDER_LIST_RELOAD';
export const ORDER_LIST_REFRESH = 'ORDER_LIST_REFRESH';
export const ORDER_LIST_STATUS_UPDATE = 'ORDER_LIST_STATUS_UPDATE';
export const ORDER_LIST_STATUS_UPDATE_SUCCESS = 'ORDER_LIST_STATUS_UPDATE_SUCCESS';

export type OrderStateType = {
	list: any[];
};

export interface ListReloadAction {
	type: typeof ORDER_LIST_RELOAD;
}

export interface ListRefreshAction {
	type: typeof ORDER_LIST_REFRESH;
	data: any[];
}

export interface OrderStatusUpdateAction {
	type: typeof ORDER_LIST_STATUS_UPDATE;
	data: {
		orderID: string;
		statusID: string;
	};
}

export interface OrderStatusUpdateSuccessAction {
	type: typeof ORDER_LIST_STATUS_UPDATE_SUCCESS;
	data: {
		orderID: string;
		statusID: string;
	};
}

export type OrdersActionTypes = ListReloadAction | OrderStatusUpdateAction | OrderStatusUpdateSuccessAction;
