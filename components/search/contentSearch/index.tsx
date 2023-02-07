import {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import ContentIndexer from '@lib/client/ContentIndexer';
import { SearchContent } from '@interfaces/Markdown';
import { useRouter } from 'next/router';

const ContentSearch = () => {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [results, setResults] = useState<SearchContent[]>(
    []
  );
  const [query, setQuery] = useState('');

  const handleClickOutside = () => {
    setResults([]);
    setQuery('');
  };

  useEffect(() => {
    const callback = (event: MouseEvent) => {
      if (
        results.length > 0 &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        handleClickOutside();
      }
    };

    const escapeKeyCallback = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && results.length > 0) {
        handleClickOutside();
      }
    };

    document.addEventListener('click', callback);
    document.addEventListener('keydown', escapeKeyCallback);

    return () => {
      document.removeEventListener('click', callback);
      document.removeEventListener(
        'keydown',
        escapeKeyCallback
      );
    };
  }, [results.length]);

  const performSearch = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const results = ContentIndexer.search(value);

    setResults(results);
    setQuery(value);
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
          ref={ref}
          value={query}
          id='search-input'
          onChange={performSearch}
          autoComplete='off'
          type='text'
          className='block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
          placeholder='Search for anything'
        />
      </div>
      {results.length > 0 && (
        <ul
          className='absolute z-10 overflow-auto bg-white border border-solid rounded-md w-80 max-h-80 select is-multiple'
          role='listbox'
        >
          {results.map((result) => (
            <li
              key={result.slug}
              onClick={() =>
                router.push(
                  `${result.category}/${result.slug}`
                )
              }
              className={`hover:bg-indigo-600 hover:text-white p-3 relative cursor-pointer`}
            >
              <div className='text-sm font-bold truncate'>
                {result.title}
              </div>
              <p className='text-sm truncate'>
                {result.description}
              </p>
              <span className='px-2 py-1 mt-2 text-xs text-white bg-gray-800 rounded-xl'>
                {result.category}
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContentSearch;
