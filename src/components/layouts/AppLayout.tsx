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
    <div className="mx-auto max-w-screen-2xl bg-slate-900 text-gray-100">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Header classNames="h-[72px] max-w-[52rem] lg:max-w-6xl" />
      <main className="mx-auto min-h-[calc(100vh-72px)] max-w-[52rem] px-4 md:px-8 lg:max-w-6xl xl:px-12">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
