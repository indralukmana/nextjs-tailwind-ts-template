import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
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
    (post) => post._raw.flattenedPath === `posts/${params?.slug}`
  );

  return {
    props: { post },
  };
};

const PostsPage: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ post }) => {
  const MDXContent = useMDXComponent(post?.body.code ?? '');

  return (
    <section className="">
      <MDXContent />
    </section>
  );
};

PostsPage.getLayout = (page) => {
  return <AppLayout>{page}</AppLayout>;
};

export default PostsPage;
