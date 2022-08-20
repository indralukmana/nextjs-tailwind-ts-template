import { compareDesc } from 'date-fns';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import AppLayout from '@/components/layouts/AppLayout';
import UnderlineLink from '@/components/links/UnderlineLink';

import { NextPageWithLayout } from '@/pages/page';

import { allPosts } from '.contentlayer/generated';

export const getStaticProps = async () => {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });

  return {
    props: { posts },
  };
};

const IndexPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ posts }) => {
  return (
    <section className="">
      <div>Home</div>
      {posts.map((post) => (
        <UnderlineLink href={post.url} key={post._id}>
          {post.title}
        </UnderlineLink>
      ))}
    </section>
  );
};

export default IndexPage;

IndexPage.getLayout = (page) => {
  return <AppLayout pageTitle="Home">{page}</AppLayout>;
};
