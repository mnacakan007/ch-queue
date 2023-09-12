import axios from 'axios';
import { HTTPStatusCodes } from '~/shared/constants/HTTPStatusCodes';
import { API_URL } from '~/shared/config/config';

import { getRawToken } from '../utility';

export function apiRequest(req) {
	const url = API_URL + req.url;
	const token = getRawToken();
	if (!req.headers) {
		req.headers = {};
	}
	if (token) {
		req.headers.Authorization = token;
	}
	req.headers['X-Requested-With'] = 'XMLHttpRequest';

	if (!req.params) {
		req.params = {};
	}
	if (!req.data) {
		req.data = {};
	}

	const axiosData = {
		method: req.method,
		url,
		headers: req.headers,
		params: req.params,
		data: req.data,
		onUploadProgress: req.onUploadProgress,
	};
	const axiosRequest = axios(axiosData);
	axiosRequest.catch(error => {
		// handleError(error);
		if (error.response && error.response.status) {
			switch (error.response.status) {
				case HTTPStatusCodes.Unauthorized && window.location.href !== '/signin': {
					window.location.href = '/signin';

					return localStorage.clear();
				}
				default:
					return axiosRequest;
			}
		}
	});

	return axiosRequest;
}
