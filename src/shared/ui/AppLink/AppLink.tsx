import { LinkProps, NavLink } from 'react-router-dom';
import React, { ReactNode, memo } from 'react';
import cls from './AppLink.scss';
import { classNames } from '~/shared/lib/classNames/classNames';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
	className?: string;
	variant?: AppLinkVariant;
	children?: ReactNode;
	activeClassName?: string;
}

const AppLink = (props: AppLinkProps) => {
	const { to, className, children, variant = 'primary', activeClassName = '', ...otherProps } = props;

	return (
		<NavLink
			to={to}
			className={({ isActive }) => classNames('', { [activeClassName]: isActive }, [className, cls[variant]])}
			{...otherProps}
		>
			{children}
		</NavLink>
	);
};

export default memo(AppLink);
