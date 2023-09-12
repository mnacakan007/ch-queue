import { getToken, getUser } from '~/helpers/utility';
import { fill } from '~/helpers/utils';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthStateType, AuthUserDataRefreshAction, LoginSuccessAction, UIRefreshAction } from '~/store/auth/types';

const restoreRememberMe = () => {
	try {
		const remember = localStorage.getItem('remember') || '';

		return JSON.parse(remember) || false;
	} catch (e) {
		return false;
	}
};

const initialState = {
	idToken: getToken(),
	user: getUser(),
	UI: {
		loading: false,
		rememberMe: restoreRememberMe(),
	},
};

const authSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		loginSuccess: (state: AuthStateType, action: PayloadAction<LoginSuccessAction>) => {
			const { token, user } = action.payload.data;

			state.idToken = token;
			state.user = user;
		},
		authUserDataRefresh: (state: AuthStateType, action: PayloadAction<AuthUserDataRefreshAction>) => {
			const { userData } = action.payload.data;
			const target = state.user;
			state.user = fill(userData, target);
		},
		uiRefresh: (state: AuthStateType, action: PayloadAction<UIRefreshAction>) => {
			const { data } = action.payload;
			const target = state.UI;
			state.UI = fill(data, target, true);
		},
	},
});

export const { loginSuccess, authUserDataRefresh, uiRefresh } = authSlice.actions;
export default authSlice.reducer;
