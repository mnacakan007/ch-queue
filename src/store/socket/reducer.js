import { Map } from 'immutable';
import actions from './actions';
import { SOCKET_STATUS } from '~/helpers/commonConstants';

const initState = new Map({
	status: SOCKET_STATUS.disconnected,
});

export default function socketReducer(state = initState, action) {
	switch (action.type) {
		case actions.SOCKET_SET_CONNECTION_STATUS: {
			const { status } = action.data;

			return state.set('status', status);
		}
		default:
			return state;
	}
}
