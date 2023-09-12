import { notification } from 'antd';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '~/app/providers/router';
import { Layout } from '~/components/Layout';

import store from '~/store';

notification.config({
	placement: 'topRight',
	top: 20,
});

const App: React.FC = () => {
	useEffect(() => {
		const isTouchDevice = 'ontouchstart' in document.documentElement;
		const body: HTMLBodyElement | null = document.querySelector('body');

		if (body) {
			if (isTouchDevice) {
				body.classList.add('touch');
			} else {
				body.classList.add('web');
			}
		}
	}, []);

	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<AppRouter />
				</Layout>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
