import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ListRefreshAction, OrderStateType, OrderStatusUpdateSuccessAction } from '~/store/orders/list/types';

const initialState = {
	list: [],
};

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		listRefresh: (state: OrderStateType, { payload }: PayloadAction<ListRefreshAction>) => {
			state.list = payload.data;
		},
		orderStatusUpdateSuccess: (state: OrderStateType, { payload }: PayloadAction<OrderStatusUpdateSuccessAction>) => {
			const orders = [...state.list];
			const index = orders.findIndex(event => event.id === payload.data.orderID);
			orders[index].statusID = payload.data.statusID;
			state.list = orders;
		},
	},
});

export const { listRefresh, orderStatusUpdateSuccess } = orderSlice.actions;
export default orderSlice.reducer;
