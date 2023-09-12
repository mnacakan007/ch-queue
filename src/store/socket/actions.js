const actions = {
	SOCKET_SET_CONNECTION_STATUS: 'SOCKET_SET_CONNECTION_STATUS',
	SOCKET_RECONNECT: 'SOCKET_RECONNECT',

	setStatus: status => ({
		type: actions.SOCKET_SET_CONNECTION_STATUS,
		data: {
			status,
		},
	}),
	reconnect: () => ({
		type: actions.SOCKET_RECONNECT,
	}),
};

export default actions;
