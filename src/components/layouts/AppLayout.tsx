import Head from 'next/head';
import * as React from 'react';

export type AppLayoutProps = { children: React.ReactNode; pageTitle?: string };

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  pageTitle = '~Page Title~',
}) => {
  // Put Header or Footer Here
  return (
    <div className="mx-auto max-w-screen-2xl ">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main className="min-h-[calc(100vh-0px)]">{children}</main>
    </div>
  );
};

export default AppLayout;
