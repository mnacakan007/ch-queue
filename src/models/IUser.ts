export type IUser = {
	isLoggedIn: boolean;
	login: () => void;
	uiRefresh: () => void;
	UI: {
		loading: boolean;
		rememberMe: boolean;
	};
};
