import { InferGetStaticPropsType } from 'next';
import { useMDXComponent } from 'next-contentlayer/hooks';
import * as React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

import AppLayout from '@/components/layouts/AppLayout';
import UnstyledLink from '@/components/links/UnstyledLink';

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
		<section className="grid gap-10 py-10 md:grid-cols-[3fr_1fr] md:py-40">
			<div>
				<MDXContent components={{}} />
			</div>
			<div>
				<ul className="grid grid-cols-1 gap-8">
					<li>
						<UnstyledLink
							href="https://twitter.com/"
							className="flex items-center space-x-4"
						>
							<BsTwitter size={20} />
							<span>Follow on Twitter</span>
						</UnstyledLink>
					</li>
					<li>
						<UnstyledLink
							href="https://github.com/"
							className="flex items-center space-x-4"
						>
							<BsGithub size={20} />
							<span>Follow on GitHub</span>
						</UnstyledLink>
					</li>
					<li>
						<UnstyledLink
							href="https://www.linkedin.com/"
							className="flex items-center space-x-4"
						>
							<BsLinkedin size={20} />
							<span>Follow on LinkedIn</span>
						</UnstyledLink>
					</li>
				</ul>
			</div>
		</section>
	);
};

AboutPage.getLayout = (page) => {
	return <AppLayout>{page}</AppLayout>;
};

export default AboutPage;
