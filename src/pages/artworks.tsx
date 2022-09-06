import axios from 'axios';
import { InferGetStaticPropsType } from 'next';
import * as React from 'react';

import AppLayout from '@/components/layouts/AppLayout';
import UnstyledLink from '@/components/links/UnstyledLink';

import { NextPageWithLayout } from '@/pages/page';

export const getStaticProps = async () => {
	const response = await axios.get('https://api.artic.edu/api/v1/artworks');

	return {
		props: { data: response.status == 200 ? response.data.data : [] },
	};
};

const ArtworkPage: NextPageWithLayout<
	InferGetStaticPropsType<typeof getStaticProps>
> = ({ data }) => {
	return (
		<div className="grid grid-cols-4 gap-4">
			{data.map((it) => (
				<div key={it.id}>
					<UnstyledLink href={'/artwork/' + it.id}>
						<div className="rounded-md border bg-green-600 p-5 shadow-sm">
							<div>{it.title}</div>
						</div>
					</UnstyledLink>
				</div>
			))}
		</div>
	);
};

ArtworkPage.getLayout = (page) => {
	return <AppLayout>{page}</AppLayout>;
};

export default ArtworkPage;
