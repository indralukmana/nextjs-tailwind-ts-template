import { compareDesc, format } from 'date-fns';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import HeroAbout from '@/components/home/HeroAbout';
import AppLayout from '@/components/layouts/AppLayout';
import UnstyledLink from '@/components/links/UnstyledLink';

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
		<div className="">
			<div className="py-20">
				<HeroAbout />
			</div>
			<div className="grid grid-cols-1 gap-4 py-6 ">
				{posts.map((post) => (
					<UnstyledLink href={post.url} key={post._id}>
						<section className="flex flex-col space-y-2 rounded-lg  p-4 hover:bg-slate-100 dark:hover:bg-slate-800">
							<h2 className="block text-base font-semibold">{post.title}</h2>
							<time dateTime={post.date} className="text-sm font-thin">
								{format(new Date(post.date), 'd LLLL yyyy')}
							</time>
							<p className="">{post.summary}</p>
						</section>
					</UnstyledLink>
				))}
			</div>
		</div>
	);
};

export default IndexPage;

IndexPage.getLayout = (page) => {
	return <AppLayout pageTitle="Home">{page}</AppLayout>;
};
