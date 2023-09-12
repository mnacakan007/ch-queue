import React, { FC, memo } from 'react';
import './Ticker.scss';
import Icon from '~/shared/ui/Icon/Icon';
import { replicateArray } from '~/utils/replicateArray';
import { ITicker } from '~/models/ITicker';

type TickerProps = {
	tickers: ITicker[];
};

const Ticker: FC<TickerProps> = ({ tickers }) => {
	return (
		<div className="ticker">
			<ul>
				{replicateArray(tickers, 3).map(({ icon, item }, index) => (
					<li key={index}>
						<span className="icon_block">
							<Icon src={icon.src} alt={icon.alt} title={icon.title} width={icon.width} height={icon.height} />
						</span>
						<span className="bold">{item.boldText}</span> {item.text}
					</li>
				))}
			</ul>
		</div>
	);
};

export default memo(Ticker);
