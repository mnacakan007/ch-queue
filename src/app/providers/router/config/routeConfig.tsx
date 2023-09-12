import React from 'react';
import { RouteProps } from 'react-router-dom';
import { HomePage } from '~/pages/HomePage';
import { LoginPage } from '~/pages/LoginPage';
import { KitchenPage } from '~/pages/KitchenPage';
import { UsersPage } from '~/pages/UsersPage';

export enum RouteNames {
	HOME_LINK = '/',
	LOGIN_LINK = '/login',
	KITCHEN_LINK = '/kitchen',
	USERS_LINK = '/users',
}
export enum AppRoutes {
	HOME = 'home',
	LOGIN = 'login',
	KITCHEN = 'kitchen',
	USERS = 'users',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: RouteNames.HOME_LINK,
	[AppRoutes.LOGIN]: RouteNames.LOGIN_LINK,
	[AppRoutes.KITCHEN]: RouteNames.KITCHEN_LINK,
	[AppRoutes.USERS]: RouteNames.USERS_LINK,
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.HOME]: {
		path: RoutePath.home,
		element: <HomePage />,
	},
	[AppRoutes.LOGIN]: {
		path: RoutePath.login,
		element: <LoginPage />,
	},
	[AppRoutes.KITCHEN]: {
		path: RoutePath.kitchen,
		element: <KitchenPage />,
	},
	[AppRoutes.USERS]: {
		path: RoutePath.users,
		element: <UsersPage />,
	},
};
