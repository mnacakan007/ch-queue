import { combineReducers } from 'redux';
import authReducer from '~/store/auth/reducer';
import orderReducer from '~/store/orders/reducer';

const rootReducer = combineReducers({
	auth: authReducer,
	order: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
