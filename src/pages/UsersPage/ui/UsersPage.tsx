import React from 'react';
import './UsersPage.scss';
import userLeft2x from '~/assets/images/user_left@2x.jpg';
import userRight2x from '~/assets/images/user_right@2x.jpg';
import { Ticker } from '~/components/Ticker';
import { tickersWhiteIcons } from '~/shared/constants/tikers';

const UsersPage: React.FC = () => {
	return (
		<>
			<div className="users_page">
				<div className="col_section" style={{ backgroundImage: `url(${userLeft2x})` }}>
					<div className="col_title">
						Շուտով կլինի
						<br />
						IN Process
					</div>
					<ul className="queue_list">
						<li>
							<span>K</span>
							<span>57</span>
						</li>
						<li>
							<span>K</span>
							<span>89</span>
						</li>
						<li>
							<span>K</span>
							<span>79</span>
						</li>
						<li>
							<span>K</span>
							<span>36</span>
						</li>
						<li>
							<span>T</span>
							<span>21</span>
						</li>
						<li>
							<span>T</span>
							<span>12</span>
						</li>
						<li>
							<span>T</span>
							<span>14</span>
						</li>
						<li>
							<span>F</span>
							<span>45</span>
						</li>
						<li>
							<span>J</span>
							<span>89</span>
						</li>
						<li>
							<span>R</span>
							<span>9</span>
						</li>
						<li>
							<span>R</span>
							<span>94</span>
						</li>
						<li>
							<span>R</span>
							<span>14</span>
						</li>
						<li>
							<span>K</span>
							<span>57</span>
						</li>
						<li>
							<span>K</span>
							<span>89</span>
						</li>
						<li>
							<span>K</span>
							<span>79</span>
						</li>
						<li>
							<span>K</span>
							<span>36</span>
						</li>
						<li>
							<span>T</span>
							<span>21</span>
						</li>
						<li>
							<span>T</span>
							<span>12</span>
						</li>
						<li>
							<span>T</span>
							<span>14</span>
						</li>
						<li>
							<span>F</span>
							<span>45</span>
						</li>
						<li>
							<span>J</span>
							<span>89</span>
						</li>
						<li>
							<span>R</span>
							<span>9</span>
						</li>
						<li>
							<span>R</span>
							<span>94</span>
						</li>
						<li>
							<span>R</span>
							<span>14</span>
						</li>
						<li>
							<span>K</span>
							<span>89</span>
						</li>
						<li>
							<span>K</span>
							<span>79</span>
						</li>
						<li>
							<span>K</span>
							<span>36</span>
						</li>
						<li>
							<span>T</span>
							<span>21</span>
						</li>
						<li>
							<span>T</span>
							<span>12</span>
						</li>
						<li>
							<span>T</span>
							<span>14</span>
						</li>
						<li>
							<span>F</span>
							<span>45</span>
						</li>
						<li>
							<span>J</span>
							<span>89</span>
						</li>
						<li>
							<span>R</span>
							<span>9</span>
						</li>
						<li>
							<span>R</span>
							<span>94</span>
						</li>
						<li>
							<span>R</span>
							<span>14</span>
						</li>
					</ul>
				</div>

				<div className="col_section" style={{ backgroundImage: `url(${userRight2x})` }}>
					<div className="col_title">
						Պատրաստ է
						<br />
						Completed
					</div>
					<ul className="queue_list">
						<li>
							<span>K</span>
							<span>54</span>
						</li>
						<li>
							<span>K</span>
							<span>34</span>
						</li>
						<li>
							<span>T</span>
							<span>11</span>
						</li>
						<li>
							<span>T</span>
							<span>36</span>
						</li>
					</ul>
				</div>

				<Ticker tickers={tickersWhiteIcons} />
			</div>
		</>
	);
};

export default UsersPage;
