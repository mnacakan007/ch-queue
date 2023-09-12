import { notification } from 'antd';
import { all, call, fork, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { ordersAPI } from '~/helpers/api/orders';
import { listRefresh, orderStatusUpdateSuccess } from '~/store/orders/list/reducer';
import { ORDER_LIST_RELOAD, ORDER_LIST_STATUS_UPDATE } from '~/store/orders/list/types';

const messages = {
	errorListLoad: 'Loading order list failed',
	errorStatusUpdate: 'Updating order status failed',
	successStatusUpdate: 'Order date has been updated',
};

function* listReload() {
	yield takeLatest(ORDER_LIST_RELOAD, function* () {
		try {
			const response = yield call(ordersAPI.orderList);
			console.log(response);
			if (response && response.status === 200) {
				yield put(listRefresh(response));
			}
			notification.success({ message: messages.successStatusUpdate });
		} catch (error) {
			notification.error({ message: messages.errorListLoad, description: error });
			console.log(error);
		}
	});
}

function* orderStatusUpdate() {
	yield takeEvery(ORDER_LIST_STATUS_UPDATE, function* (action) {
		debugger;
		const { orderID, statusID } = action.data;
		yield put(orderStatusUpdateSuccess(action.data));
		const data = {
			orderID: orderID,
			status_id: statusID,
		};
		try {
			const response = yield call(ordersAPI.orderUpdate, orderID, data);
			if (response && response.status === 200) {
				yield put(listReload(response.data));
			}
			notification.success({ message: messages.successStatusUpdate });
		} catch (error) {
			notification.error({ message: messages.errorStatusUpdate, description: error });
			console.log(error);
		}
	});
}

export default function* eventsListSaga() {
	yield all([fork(listReload), fork(orderStatusUpdate)]);
}
