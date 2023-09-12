import React, { memo } from 'react';
import './Icon.scss';

type SvgProps = Omit<React.SVGProps<HTMLImageElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
	className?: string;
	src: string;
	alt: string;
	title: string;
}

interface NonClickableIconProps extends IconBaseProps {
	clickable?: false;
}

interface ClickableBaseProps extends IconBaseProps {
	clickable: true;
	onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

const Icon = (props: IconProps) => {
	const { className, src, width = 32, height = 32, clickable, ...otherProps } = props;

	const icon = (
		<img src={src} className={className} width={width} height={height} {...otherProps} onClick={undefined} alt="" />
	);

	if (clickable) {
		return (
			<button type="button" className={'button'} onClick={props.onClick} style={{ height, width }}>
				{icon}
			</button>
		);
	}

	return icon;
};

export default memo(Icon);
