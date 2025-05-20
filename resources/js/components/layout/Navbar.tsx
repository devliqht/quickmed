import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { APP_NAME } from '../../lib/constants';
import { cn, getInitials } from '../../lib/utils';

interface NavbarProps {
  onMenuButtonClick: () => void;
  user?: {
    first_name: string;
    last_name: string;
    email: string;
  };
}

export function Navbar({ onMenuButtonClick, user }: NavbarProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-3 lg:px-6">
        <div className="flex items-center">
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            onClick={onMenuButtonClick}
          >
            <span className="sr-only">Open sidebar</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="ml-4 md:ml-0 text-xl font-semibold text-blue-600">
            {APP_NAME}
          </div>
        </div>
        
        {user ? (
          <div className="flex items-center">
            <Menu as="div" className="relative ml-3">
              <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="sr-only">Open user menu</span>
                <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  {getInitials(`${user.first_name} ${user.last_name}`)}
                </div>
              </Menu.Button>
              
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900 truncate">{`${user.first_name} ${user.last_name}`}</p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  </div>
                  
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/profile"
                        className={cn(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        Your Profile
                      </Link>
                    )}
                  </Menu.Item>
                  
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/logout"
                        method="post"
                        as="button"
                        className={cn(
                          active ? 'bg-gray-100' : '',
                          'block w-full text-left px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        Sign out
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
              Sign in
            </Link>
            <Link 
              href="/register" 
              className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
} 