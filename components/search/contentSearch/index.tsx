import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

import ContentIndexer from '@lib/client/ContentIndexer';
import { ChangeEvent } from 'react';

const ContentSearch = () => {
  const performSearch = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const results = ContentIndexer.search(value);
    console.log(results);
  };

  return (
    <>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <MagnifyingGlassIcon
            className='w-5 h-5 text-gray-400'
            aria-hidden='true'
          />
        </div>
        <input
          id='search-input'
          onChange={performSearch}
          autoComplete='off'
          type='text'
          className='block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='Search for anything'
        />
      </div>
      {false && (
        <ul
          className='absolute z-10 overflow-auto bg-white border border-solid rounded-md w-80 max-h-80 select is-multiple'
          role='listbox'
        >
          <li
            onClick={() => {}}
            className={`hover:bg-indigo-600 hover:text-white p-3 relative cursor-pointer`}
          >
            <div className='text-sm font-bold truncate'>
              Found Blog Title 1
            </div>
            <p className='text-sm truncate'>
              Found Blog Desc 1
            </p>
            <span className='px-2 py-1 mt-2 text-xs text-white bg-gray-800 rounded-xl'>
              blogs
            </span>
          </li>
          <li
            onClick={() => {}}
            className={`hover:bg-indigo-600 hover:text-white p-3 relative cursor-pointer`}
          >
            <div className='text-sm font-bold truncate'>
              Found Blog Title 2
            </div>
            <p className='text-sm truncate'>
              Found Blog Desc 2
            </p>
            <span className='px-2 py-1 mt-2 text-xs text-white bg-gray-800 rounded-xl'>
              portfolios
            </span>
          </li>
        </ul>
      )}
    </>
  );
};

export default ContentSearch;
