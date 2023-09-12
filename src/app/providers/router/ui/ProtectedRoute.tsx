import React from 'react';
import { Navigate } from 'react-router-dom';
import { RouteNames } from '~/app/providers/router/config/routeConfig';

export const ProtectedRoute = () => {
	return <Navigate to={RouteNames.LOGIN_LINK} />;
};
