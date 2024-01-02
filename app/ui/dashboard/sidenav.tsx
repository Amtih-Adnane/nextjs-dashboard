'use client';
import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import TechanodssLogo from '@/app/ui/technodss-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import React from 'react';
import clsx from 'clsx';

export default function SideNav() {
  const [openSidebar, setOpenSideBar] = React.useState(true);
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className={clsx(
        'fixed left-0 top-0 z-40 h-screen -translate-x-full transition-transform sm:translate-x-0',
        openSidebar ? 'w-64' : 'w-32',
      )}
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-gray-50  dark:bg-gray-800">
        <Link
          className="mb-2 flex h-20 items-center justify-center bg-blue-600 p-4 "
          href="/dashboard"
        >
          <div className="w-32 text-white ">
            <TechanodssLogo />
          </div>
        </Link>
        <NavLinks />
        <form
          className="w-full space-y-2 font-medium"
          action={async () => {
            await signOut();
          }}
        >
          <button className="group flex w-full items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            <PowerIcon className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
            <span className="ms-3 ">Sign Out</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
