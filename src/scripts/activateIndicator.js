export const activateIndicator = (item, indicatorRef) => {
	const indicatorWidth = item.current.clientWidth;
	const indicatorLeft = item.current.offsetLeft;
	indicatorRef.current.style.width = indicatorWidth + 'px';
	indicatorRef.current.style.left = indicatorLeft + 'px';
};
