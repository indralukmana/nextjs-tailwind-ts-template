import * as React from 'react';

import clsxm from '@/lib/clsxm';

import { links, SiteLink } from '@/components/layouts/links';
import ThemeToggleButton from '@/components/layouts/ThemeToggleButton';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

export interface HeaderProps {
	classNames?: string;
}

const Links = ({ links }: { links: SiteLink[] }) => {
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

const Header: React.FC<HeaderProps> = ({ classNames }) => {
	return (
		<header
			className={clsxm(
				' flex items-center justify-between py-6 dark:bg-zinc-900 dark:text-zinc-100	 ',
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
