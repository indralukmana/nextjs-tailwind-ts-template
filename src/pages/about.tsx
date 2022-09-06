import { InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import * as React from 'react';

import AppLayout from '@/components/layouts/AppLayout';

import { NextPageWithLayout } from '@/pages/page';

import { allAbouts } from '.contentlayer/generated';

export const getStaticProps = async () => {
	const about = allAbouts.find((about) => about.url === 'about');

	return {
		props: { about },
	};
};

const AboutPage: NextPageWithLayout<
	InferGetStaticPropsType<typeof getStaticProps>
> = ({ about }) => {
	const MDXContent = useMDXComponent(about?.body.code ?? '');

	return (
		<section className="">
			<MDXContent components={{}} />
		</section>
	);
};

AboutPage.getLayout = (page) => {
	return <AppLayout>{page}</AppLayout>;
};

export default AboutPage;
