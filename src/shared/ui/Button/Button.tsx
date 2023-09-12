import React, { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react';
import './Button.scss';
import { Mods, classNames } from '~/shared/lib/classNames/classNames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	square?: boolean;
	disabled?: boolean;
	children?: ReactNode;
	fullWidth?: boolean;
}

const Button = (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
	const { className, children, disabled, fullWidth, ...otherProps } = props;

	const mods: Mods = {
		disabled: disabled,
		fullWidth: fullWidth,
	};

	return (
		<button type="button" className={classNames('', mods, [className])} disabled={disabled} {...otherProps} ref={ref}>
			{children}
		</button>
	);
};

export default forwardRef(Button);
