import * as React from 'react';

import AppLayout from '@/components/layouts/AppLayout';

import { NextPageWithLayout } from '@/pages/page';

const IndexPage: NextPageWithLayout = () => {
  return (
    <main>
      <section className="">
        <div className="layout min-h-screen py-20">test dashboard</div>
      </section>
    </main>
  );
};

export default IndexPage;

IndexPage.getLayout = (page) => {
  return <AppLayout pageTitle="test">{page}</AppLayout>;
};
