import { all, call, fork, put, select, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { authApi } from '~/helpers/api/auth';
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from '~/store/auth/types';
import socketActions from '~/store/socket/actions';

import { uiRefresh } from './actions';

import { adaptUser } from './utils';

const getStoreData = state => {
	const authUI = state.Auth.get('UI');

	return {
		rememberMe: authUI.rememberMe,
	};
};

export function clearLocalStorage() {
	localStorage.removeItem('id_token');
	localStorage.removeItem('token');
	localStorage.removeItem('user');
}

export function clearSessionStorage() {
	sessionStorage.clear();
}

export const setSessionCommon = (token, remember) => {
	sessionStorage.setItem('id_token', token);
	localStorage.setItem('remember', JSON.stringify(remember));
};

export function* loginRequest() {
	yield takeEvery(LOGIN_REQUEST, function* (authData) {
		yield put(uiRefresh({ loading: true }));
		const reqData = authData.data;
		try {
			const res = yield call(authApi.apiLogin, reqData);

			if (res && res.status === 200) {
				const token = res.data.data.access_token;
				const { adaptedData: user } = adaptUser(res.data.data.user);
				yield put(loginSuccess(token, user));

				// redirect to dashboard
				yield put(push('/dashboard'));
			} else {
				yield put(loginError());
			}
		} catch (error) {
			/* showError('Login failed', error); */
			yield put(loginError());
		}

		yield put(uiRefresh({ loading: false }));
	});
}

export const setStorageCommon = (token, remember) => {
	localStorage.setItem('id_token', token);
	localStorage.setItem('remember', JSON.stringify(remember));
};

export function* loginSuccess() {
	yield takeEvery(LOGIN_SUCCESS, function* (action) {
		const { rememberMe } = yield select(getStoreData);
		const { token, user } = action.data;

		yield localStorage.setItem('user', JSON.stringify(user));
		yield localStorage.setItem('remember', JSON.stringify(rememberMe));

		if (rememberMe) {
			setStorageCommon(token, rememberMe);
		} else {
			setSessionCommon(token, rememberMe);
		}

		yield put(socketActions.reconnect());
	});
}

export function* loginError() {
	yield takeEvery(LOGIN_ERROR, function* () {
		yield call(clearLocalStorage);
		yield call(clearSessionStorage);
		yield put(push('/signin'));
		yield put(socketActions.reconnect());
	});
}

export function* logOut() {
	yield takeEvery(LOGOUT, function* () {
		try {
			yield call(authApi.logout);
		} catch (e) {
			// showError('Logout failed', e);
		}

		yield put(push('/signin'));
		yield put(socketActions.reconnect());
		yield call(clearLocalStorage);
		yield call(clearSessionStorage);
	});
}

export default function* authSaga() {
	yield all([fork(loginRequest), fork(loginSuccess), fork(loginError), fork(logOut)]);
}
