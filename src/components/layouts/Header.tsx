import * as React from 'react';

import clsxm from '@/lib/clsxm';

import ThemeToggleButton from '@/components/layouts/ThemeToggleButton';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

export interface HeaderProps {
	classNames?: string;
}

type Link = { href: string; text: string };

const Links = ({ links }: { links: Link[] }) => {
	return (
		<ul className="text-zinc-200; flex rounded-full border border-zinc-500 px-3 text-sm font-medium leading-6	dark:bg-zinc-800/90	">
			{links.map((linkItem) => {
				return (
					<li
						key={linkItem.href}
						className="ease-in-outduration-[0.15s] relative block px-3 py-2 hover:text-teal-400"
					>
						<UnderlineLink href={linkItem.href}>{linkItem.text}</UnderlineLink>
					</li>
				);
			})}
		</ul>
	);
};

const links: Link[] = [
	{ href: '/about', text: 'About' },
	{ href: '/posts', text: 'Posts' },
	{ href: '/projects', text: 'Projects' },
];

const Header: React.FC<HeaderProps> = ({ classNames }) => {
	return (
		<header
			className={clsxm(
				'mx-auto flex items-center justify-between p-6 px-8 dark:bg-zinc-900 dark:text-zinc-100	 md:px-20',
				classNames
			)}
		>
			<UnstyledLink href="/" className="group">
				<div className="">Home</div>
			</UnstyledLink>
			<Links links={links} />

			<ThemeToggleButton />
		</header>
	);
};

export default Header;
