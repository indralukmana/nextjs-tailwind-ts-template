import Head from 'next/head';
import * as React from 'react';

import Header from '@/components/layouts/Header';

export type AppLayoutProps = { children: React.ReactNode; pageTitle?: string };

const AppLayout: React.FC<AppLayoutProps> = ({
	children,
	pageTitle = '~Page Title~',
}) => {
	// Put Header or Footer Here
	return (
		<div className="mx-auto text-zinc-800 dark:bg-black dark:text-zinc-100">
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<Header classNames="max-w-[52rem] lg:max-w-6xl" />
			<main className="mx-auto min-h-[calc(100vh-72px)] max-w-[52rem] px-4 dark:bg-zinc-900 md:px-8 lg:max-w-6xl xl:px-12">
				{children}
			</main>
		</div>
	);
};

export default AppLayout;
