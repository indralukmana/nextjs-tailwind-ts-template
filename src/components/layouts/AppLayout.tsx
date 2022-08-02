import Head from 'next/head';
import * as React from 'react';

export type AppLayoutProps = { children: React.ReactNode; pageTitle?: string };

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  pageTitle = '~Page Title~',
}) => {
  // Put Header or Footer Here
  return (
    <div className="min-h-full bg-blue-400">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {children}
    </div>
  );
};

export default AppLayout;
