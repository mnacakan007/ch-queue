import { SOCKET_STATUS } from '~/helpers/commonConstants';

export function isSocketConnected(state) {
	const status = state.Socket.get('status');

	return status === SOCKET_STATUS.connected;
}
