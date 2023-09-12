import { all } from 'redux-saga/effects';
import authSaga from '~/store/auth/saga';
import ordersRootSaga from '~/store/orders/saga';

export default function* rootSaga(): Generator {
	yield all([authSaga(), ordersRootSaga()]);
}
