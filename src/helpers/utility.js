export function getRawToken() {
	return localStorage.getItem('id_token') || sessionStorage.getItem('id_token');
}

export function clearToken() {
	localStorage.removeItem('id_token');
	sessionStorage.removeItem('id_token');
}

export function clearUser() {
	localStorage.removeItem('user');
	sessionStorage.removeItem('user');
}

export function getToken() {
	try {
		return localStorage.getItem('id_token') || sessionStorage.getItem('id_token');
	} catch (err) {
		clearToken();

		return null;
	}
}
export function getUser() {
	try {
		const rawUser = localStorage.getItem('user') || sessionStorage.getItem('user');

		return JSON.parse(rawUser);
	} catch (error) {
		clearUser();

		return null;
	}
}
