import * as React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

import UnstyledLink from '@/components/links/UnstyledLink';

const HeroAbout = () => {
	return (
		<div className="max-w-2xl">
			<h1>Curious Cat</h1>

			<p>I'm a cat that likes to eat and sleep.</p>

			<ul className="flex space-x-8 pt-8">
				<li>
					<UnstyledLink href="https://twitter.com/">
						<BsTwitter size={30} />
					</UnstyledLink>
				</li>
				<li>
					<UnstyledLink href="https://github.com/">
						<BsGithub size={30} />
					</UnstyledLink>
				</li>
				<li>
					<UnstyledLink href="https://www.linkedin.com/">
						<BsLinkedin size={30} />
					</UnstyledLink>
				</li>
			</ul>
		</div>
	);
};

export default HeroAbout;
