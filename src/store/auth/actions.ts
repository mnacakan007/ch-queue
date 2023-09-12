import {
	AUTH_USER_DATA_REFRESH,
	AuthActionTypes,
	LOGIN_ERROR,
	LOGIN_REQUEST,
	LOGOUT,
	LoginCredentials,
	UI_REFRESH,
	User,
} from './types';

export function login(authData: LoginCredentials, checked: boolean): AuthActionTypes {
	return {
		type: LOGIN_REQUEST,
		data: authData,
		checked,
	};
}

export function loginError(): AuthActionTypes {
	return {
		type: LOGIN_ERROR,
	};
}

export function logout(): AuthActionTypes {
	return {
		type: LOGOUT,
	};
}

export function userDataRefresh(userData: User): AuthActionTypes {
	return {
		type: AUTH_USER_DATA_REFRESH,
		data: {
			userData,
		},
	};
}

export function uiRefresh(data: unknown): AuthActionTypes {
	return {
		type: UI_REFRESH,
		data,
	};
}
