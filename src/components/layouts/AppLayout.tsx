import Head from 'next/head';
import * as React from 'react';

import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';

export type AppLayoutProps = { children: React.ReactNode; pageTitle?: string };

const AppLayout: React.FC<AppLayoutProps> = ({
	children,
	pageTitle = '~Page Title~',
}) => {
	// Put Header or Footer Here
	return (
		<div className="m-0  min-h-screen px-4 text-zinc-800 dark:bg-black dark:text-zinc-100 md:px-20">
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<div className="grid min-h-screen grid-rows-[100px_1fr_100px] px-4 dark:bg-zinc-900 md:px-20">
				<Header classNames="" />
				<main className="max-w-[52rem]  lg:max-w-6xl xl:px-12">{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default AppLayout;
