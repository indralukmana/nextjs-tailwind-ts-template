import * as React from 'react';

import clsxm from '@/lib/clsxm';

import { links, SiteLink } from '@/components/layouts/links';
import UnderlineLink from '@/components/links/UnderlineLink';

export interface FooterProps {
	classNames?: string;
}

const FooterLinks = ({ links }: { links: SiteLink[] }) => {
	return (
		<ul className="flex px-3 text-sm font-medium leading-6 dark:text-zinc-200		">
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

const Footer: React.FC<FooterProps> = ({ classNames }) => {
	return (
		<footer className={clsxm('flex items-center justify-between', classNames)}>
			<FooterLinks links={links} />
			<p>© 2022 Indra Lukmana. All rights reserved.</p>
		</footer>
	);
};

export default Footer;
