import React from 'react';
import { CSSProperties } from 'react';
import { classNames } from '~/shared/lib/classNames/classNames';
import './Skeleton.scss';

interface SkeletonProps {
	className?: string;
	height?: string | number;
	width?: string | number;
	border?: string;
	number?: number;
}

export const Skeleton = (props: SkeletonProps) => {
	const { className, height, width, border, number } = props;
	const skeleton = new Array(number).fill(1);
	const styles: CSSProperties = {
		width,
		height,
		borderRadius: border,
	};

	return (
		<>
			{skeleton.map((item, i) => {
				return <div key={i} className={classNames('skeleton', {}, [className])} style={styles} />;
			})}
		</>
	);
};
