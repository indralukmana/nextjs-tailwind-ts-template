import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';

export interface HeaderProps {
  classNames?: string;
}

const Header: React.FC<HeaderProps> = ({ classNames }) => {
  return (
    <header
      className={clsxm(
        'mx-auto flex flex-col justify-between p-6 md:flex-row md:px-0',
        classNames
      )}
    >
      <UnstyledLink href="/" className="group">
        <div className="group-hover:animate-bounce">Home</div>
      </UnstyledLink>
      <ul className="flex space-x-4">
        <li>
          <UnderlineLink href="/posts">Posts</UnderlineLink>
        </li>
        {/* <li>Projects</li> */}
        {/* <li>Notes</li> */}
        <li>
          <UnderlineLink href="/about">About</UnderlineLink>
        </li>
        <li>
          <UnderlineLink href="/artworks">Artworks</UnderlineLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
