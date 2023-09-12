import React, { ReactNode } from 'react';
import './Layout.scss';

interface LayoutProps {
	children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return <main>{children}</main>;
};

export default Layout;
