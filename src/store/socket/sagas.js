import { all, call, fork, takeEvery } from 'redux-saga/effects';
import { watchMessages } from './watcher';

function* externalSaga() {
	const channel = yield call(watchMessages);

	yield takeEvery(channel, function* (action) {
		yield all([fork(action)]);
	});
}

export default function* socketSaga() {
	yield all([fork(externalSaga)]);
}
