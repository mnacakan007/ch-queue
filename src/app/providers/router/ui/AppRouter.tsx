import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '~/app/providers/router/config/routeConfig';
import { ProtectedRoute } from '~/app/providers/router/ui/ProtectedRoute';

import { HotFoundPage } from '~/pages/HotFoundPage';

const AppRouter = () => {
	// const {setUser, setIsAuth} = useActions();

	// useEffect(() => {
	// 	if (localStorage.getItem('auth')) {
	// 		setUser({ username: localStorage.getItem('username' || '') } as IUser);
	// 		setIsAuth(true);
	// 	}
	// }, []);

	return (
		<Routes>
			{Object.values(routeConfig).map(({ element, path }) => (
				<Route key={path} path={path} element={<Suspense fallback={<div>Loading...</div>}>{element}</Suspense>} />
			))}
			<Route path="/profile" element={<ProtectedRoute />} />
			<Route path="*" element={<HotFoundPage />} />
		</Routes>
	);
};

export default AppRouter;
