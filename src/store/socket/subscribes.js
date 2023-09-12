import { SOCKET_STATUS } from '~/helpers/commonConstants';
import { socketConfig } from '~/shared/config/config';
import socketActions from './actions';

const { debugInfo } = socketConfig;

function subscribe(socket, emit) {
	socket.on('connect', () => {
		if (debugInfo) {
			console.log('Connection to websocket established');
		}
		emit(socketActions.setStatus(SOCKET_STATUS.connected));
	});

	socket.on('disconnect', reason => {
		emit(socketActions.setStatus(SOCKET_STATUS.disconnected));
		if (reason === 'io server disconnect') {
			if (debugInfo) {
				console.log('Websocket disconnected. Trying reconnect...');
			}
			socket.connect();
		}
	});

	socket.on('error', error => {
		if (debugInfo) {
			console.log(`Connection to websocket failed with error ${error}`);
			console.dir(error);
		}
		emit(socketActions.setStatus(SOCKET_STATUS.disconnected));
	});

	socket.on('create', event => {
		if (debugInfo) {
			console.log('Incoming event "Create": ', event);
		}

		const { type, data } = event;
		if (!data) {
			// console.error(createError(event));

			return;
		}
		switch (type) {
			// case EVENT_TYPES.messages:
			// 	emit(socketActions.notifyUpdateMessages(data));
			// 	break;

			default:
				if (debugInfo) {
					console.error(`Incoming event "Create": Unknown event type: ${type}`);
				}
		}
	});

	socket.on('update', event => {
		if (debugInfo) {
			console.log('Incoming event "Update": ', event);
		}

		const { type, data } = event;
		if (!data) {
			// console.error(createError(event));

			return;
		}

		switch (type) {
			// case EVENT_TYPES.userDocument:
			// 	emit(socketActions.notifyUpdateUserDocument(data));
			// 	break;

			default:
				console.error(`Incoming event "Create": Unknown event type: ${type}`);
		}
	});

	socket.on('connect_error', () => {
		if (debugInfo) {
			console.log('Socket connection error...');
		}
		emit(socketActions.setStatus(SOCKET_STATUS.disconnected));
	});
}

export default subscribe;
