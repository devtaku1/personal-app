import { Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Fragment } from 'react';

import Image from 'next/legacy/image';
import Link from 'next/link';

import { navigation } from './navigation';
import { ContentSearch } from '@components/search';

const Navbar = () => {
  return (
    <>
      <svg
        className='absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block'
        fill='currentColor'
        viewBox='0 0 100 100'
        preserveAspectRatio='none'
        aria-hidden='true'
      >
        <polygon points='50,0 100,0 50,100 0,100' />
      </svg>

      {/* NAVIGATION START */}
      <Popover>
        <div className='relative px-4 pt-6 sm:px-6 lg:px-8'>
          <nav
            className='relative flex items-center justify-between sm:h-10 lg:justify-start'
            aria-label='Global'
          >
            <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
              <div className='flex items-center justify-between w-full md:w-auto'>
                <Link legacyBehavior href='/'>
                  <a>
                    <span className='sr-only'>
                      Your Company
                    </span>
                    <Image
                      width={30}
                      height={30}
                      alt='Your Company'
                      className='w-auto h-8 sm:h-10'
                      src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                    />
                  </a>
                </Link>
                <div className='flex items-center -mr-2 md:hidden'>
                  <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>
                      Open main menu
                    </span>
                    <Bars3Icon
                      className='w-6 h-6'
                      aria-hidden='true'
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className='hidden md:ml-10 md:block md:space-x-8 md:pr-4'>
              {navigation.map((item) => (
                <Link
                  legacyBehavior
                  key={item.name}
                  href={item.href}
                >
                  <a className='font-medium text-gray-500 hover:text-gray-900'>
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <div className='hidden md:block'>
              <ContentSearch />
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter='duration-150 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden'
          >
            <div className='bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5'>
              <div className='flex items-center justify-between px-5 pt-4'>
                <div>
                  <Image
                    height={20}
                    width={20}
                    className='w-auto h-8'
                    src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                    alt=''
                  />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>
                      Close main menu
                    </span>
                    <XMarkIcon
                      className='w-6 h-6'
                      aria-hidden='true'
                    />
                  </Popover.Button>
                </div>
              </div>
              <div className='px-2 pt-2 pb-3 space-y-1'>
                {navigation.map((item) => (
                  <Link
                    legacyBehavior
                    key={item.name}
                    href={item.href}
                  >
                    <a className='block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-50 hover:text-gray-900'>
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div className='px-4'>
                {/* Search Input Component */}
              </div>
              <a
                href='#'
                className='block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100'
              >
                Log in
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      {/* NAVIGATION END */}
    </>
  );
};

export default Navbar;
