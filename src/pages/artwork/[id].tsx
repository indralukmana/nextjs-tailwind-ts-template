import { useRouter } from 'next/router';
import * as React from 'react';

import AppLayout from '@/components/layouts/AppLayout';

import { NextPageWithLayout } from '@/pages/page';

const PostsPage: NextPageWithLayout<> = () => {
	const { query } = useRouter();

	return (
		<div>
			<div>{query.id}</div>
		</div>
	);
};

PostsPage.getLayout = (page) => {
	return <AppLayout>{page}</AppLayout>;
};

export default PostsPage;
