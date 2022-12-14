import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@fontsource/inter/variable-full.css';
import '../styles/globals.css';

import { NextPageWithLayout } from '@/pages/page';

interface AppPropsWithLayout extends AppProps {
	Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout || ((page) => page);

	return (
		<ThemeProvider attribute="class">
			{getLayout(<Component {...pageProps} />)}
		</ThemeProvider>
	);
}

export default MyApp;
