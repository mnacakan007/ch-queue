import React from 'react';

import { PageScreen } from '~/components/PageScreen';
import { SignPage } from '~/components/SignPage';

const LoginPage = () => {
	// const { isAuth } = useTypedSelector(state => state.auth);

	return (
		<>
			<PageScreen />
			<SignPage />
		</>
	);
};

export default LoginPage;
