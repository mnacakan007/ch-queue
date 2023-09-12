export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const AUTH_USER_DATA_REFRESH = 'AUTH_USER_DATA_REFRESH';
export const UI_REFRESH = 'UI_REFRESH';

export type User = {
	id: string;
	name: string;
	lastname?: string;
	email?: string;
	active?: boolean;
	createdAt?: Date;
	updatedAt?: Date;
};

export type AuthStateType = {
	idToken: string | null;
	user: User;
	UI: {
		loading: boolean;
		rememberMe: boolean | string | null;
	};
};

export type LoginCredentials = {
	email: string;
	password: string;
};

export interface LoginAction {
	type: typeof LOGIN_REQUEST;
	data: LoginCredentials;
	checked: boolean;
}

export interface LoginErrorAction {
	type: typeof LOGIN_ERROR;
}

export interface LoginSuccessAction {
	type: typeof LOGIN_SUCCESS;
	data: {
		token: string;
		user: User;
		checked: boolean;
	};
}

export interface LogoutAction {
	type: typeof LOGOUT;
}

export interface AuthUserDataRefreshAction {
	type: typeof AUTH_USER_DATA_REFRESH;
	data: {
		userData: User;
	};
}

export interface UIRefreshAction {
	type: typeof UI_REFRESH;
	data: unknown;
}

export type AuthActionTypes =
	| LoginAction
	| LoginErrorAction
	| LoginSuccessAction
	| LogoutAction
	| AuthUserDataRefreshAction
	| UIRefreshAction;
