import React, { FC, memo } from 'react';
import './SignPage.scss';
import { Ticker } from '~/components/Ticker';
import LoginForm from '~/components/LoginForm/ui/LoginForm';
import { tickersRedIcons } from '~/shared/constants/tikers';

const SignPage: FC = () => {
	return (
		<div className="sign_page">
			<Ticker tickers={tickersRedIcons} />

			<div className="sign_section">
				<div className="title_block">
					<h1 className="section_title">Log in</h1>
					<span className="sticker">
						<span>GOOD WORKING DAY</span>
					</span>
				</div>

				<LoginForm />
			</div>
		</div>
	);
};

export default memo(SignPage);
