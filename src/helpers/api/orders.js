import { apiRequest } from './index';
/* ------------------------------------------------------------------------------------------------
    Main
------------------------------------------------------------------------------------------------ */

// get list of orders
function orderList(params = {}) {
	const req = {
		method: 'GET',
		url: '/posts',
		params,
	};

	return apiRequest(req);
}

// get order
function orderGet(eventID, additionalParams = {}) {
	const req = {
		method: 'GET',
		url: `/orders/getEvent/${eventID}`,
		params: { ...additionalParams },
	};

	return apiRequest(req);
}

// update order
function orderUpdate(eventID, data, additionalParams = {}) {
	const req = {
		method: 'POST',
		url: `/orders/${eventID}`,
		params: { ...additionalParams },
		data,
	};

	return apiRequest(req);
}

export const ordersAPI = {
	// Main
	orderList,
	orderGet,
	orderUpdate,
};
