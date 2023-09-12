import { apiRequest } from './index';

export function apiLogin(authData) {
	const req = {
		method: 'POST',
		url: '/admin/login',
		data: authData,
	};

	return apiRequest(req);
}
export function logout() {
	const req = {
		method: 'POST',
		url: '/logout',
	};

	return apiRequest(req);
}

export const authApi = {
	apiLogin,
	logout,
};
