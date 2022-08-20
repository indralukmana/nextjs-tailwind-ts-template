import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import * as React from 'react';

import AppLayout from '@/components/layouts/AppLayout';

import { NextPageWithLayout } from '@/pages/page';

import { allPosts } from '.contentlayer/generated';

export async function getStaticPaths() {
  const paths: string[] = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === params?.slug
  );

  return {
    props: { post },
  };
};

const PostsPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ post }) => {
  return (
    <section className="">
      <div dangerouslySetInnerHTML={{ __html: post?.body.html ?? '' }} />
    </section>
  );
};

PostsPage.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};

export default PostsPage;
