export type ITicker = {
	icon: TickerIcon;
	item: TickerTitle;
};

type TickerIcon = {
	src: string;
	alt: string;
	title: string;
	width: string;
	height: string;
};

type TickerTitle = {
	boldText: string;
	text: string;
};
