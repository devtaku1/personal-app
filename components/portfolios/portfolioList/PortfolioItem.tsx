import { FunctionComponent } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';

import { Portfolio } from '@interfaces/Portfolio';
import { shortify } from '@lib/client/utils';

type Props = {
  portfolio: Portfolio;
};

export const PortfolioItem: FunctionComponent<Props> = ({
  portfolio,
}) => {
  return (
    <div key={portfolio.slug} className='relative group'>
      <div className='relative w-full overflow-hidden bg-white rounded-lg h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1'>
        <Image
          layout='fill'
          src={portfolio.coverImage}
          alt={''}
          className='object-cover object-center w-full h-full'
        />
      </div>
      <h3 className='mt-6 text-sm text-gray-500'>
        <Link
          legacyBehavior
          href={`/portfolios/${portfolio.slug}`}
        >
          <a>
            <span className='absolute inset-0' />
            {shortify(portfolio.title)}
          </a>
        </Link>
      </h3>
      <p className='text-base font-semibold text-gray-900'>
        {shortify(portfolio.description)}
      </p>
    </div>
  );
};

export default PortfolioItem;
