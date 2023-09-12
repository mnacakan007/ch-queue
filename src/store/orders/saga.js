import { all, fork } from 'redux-saga/effects';

import listSaga from './list/saga';

export default function* ordersRootSaga() {
	yield all([fork(listSaga)]);
}
