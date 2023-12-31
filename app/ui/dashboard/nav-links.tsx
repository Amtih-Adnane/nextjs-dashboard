'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { links } from '@/app/ui/components/links';
import NavFirstChild from '@/app/ui/components/NavFirstChild';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      <>
        <ul className="space-y-2 font-medium">
          {links.map((link, index) => {
            const LinkIcon = link.icon;
            return !link.childs ? (
              // No Childs
              <li key={index}>
                <Link
                  href={link.href}
                  className={clsx(
                    'group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                    {
                      'bg-sky-100 text-blue-600': pathname === link.href,
                    },
                  )}
                >
                  <LinkIcon className="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                  <span className="ms-3 hidden md:block">{link.name}</span>
                </Link>
              </li>
            ) : (
              // Has Childs check Again
              <li key={index}>
                <button
                  type="button"
                  className="group flex w-full items-center rounded-lg p-2 transition duration-75 hover:bg-gray-100"
                  aria-controls={`dropdown-${link.name}`}
                  data-collapse-toggle={`dropdown-${link.name}`}
                >
                  <LinkIcon className="h-5 w-5 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                  <span className="ms-3 hidden flex-1 whitespace-nowrap text-left md:block ">
                    {link.name}
                  </span>
                  <svg
                    className="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <ul
                  id={`dropdown-${link.name}`}
                  className="hidden space-y-2 py-2"
                >
                  {/* Start 1 Nested Child */}
                  {link.childs.map((firstChild: any, index) => {
                    return !firstChild.childs ? (
                      // No Childs
                      <li key={index}>
                        <Link
                          href={firstChild.href}
                          className={clsx(
                            'group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                            {
                              'bg-sky-100 text-blue-600':
                                pathname === firstChild.href,
                            },
                          )}
                        >
                          <span className="ms-8">{firstChild.name}</span>
                        </Link>
                      </li>
                    ) : (
                      // Has Childs check Again
                      <li key={index}>
                        <button
                          type="button"
                          className="group flex w-full items-center rounded-lg p-2 transition duration-75 hover:bg-gray-100"
                          aria-controls={`dropdown-${firstChild.name}`}
                          data-collapse-toggle={`dropdown-${firstChild.name}`}
                        >
                          <span className="ms-8 flex-1 whitespace-nowrap text-left  ">
                            {firstChild.name}
                          </span>
                          <svg
                            className="h-3 w-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>
                        <ul
                          id={`dropdown-${firstChild.name}`}
                          className="hidden space-y-2 py-2"
                        >
                          {firstChild.childs.map(
                            (secondChild: any, index: number) => {
                              return !secondChild.childs ? (
                                // No Childs
                                <li key={index}>
                                  <Link
                                    href={secondChild.href}
                                    className={clsx(
                                      'group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                                      {
                                        'bg-sky-100 text-blue-600':
                                          pathname === secondChild.href,
                                      },
                                    )}
                                  >
                                    <span className="ms-8">
                                      {secondChild.name}
                                    </span>
                                  </Link>
                                </li>
                              ) : (
                                // Has Childs check Again
                                <li key={index}>
                                  <button
                                    type="button"
                                    className="group flex w-full items-center rounded-lg p-2 transition duration-75 hover:bg-gray-100"
                                    aria-controls={`dropdown-${secondChild.name}`}
                                    data-collapse-toggle={`dropdown-${secondChild.name}`}
                                  >
                                    <span className="ms-8 flex-1 whitespace-nowrap text-left  ">
                                      {secondChild.name}
                                    </span>
                                    <svg
                                      className="h-3 w-3"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 10 6"
                                    >
                                      <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 4 4 4-4"
                                      />
                                    </svg>
                                  </button>
                                  <ul
                                    id={`dropdown-${secondChild.name}`}
                                    className="hidden space-y-2 py-2"
                                  >
                                    {secondChild.childs.map(
                                      (ThirdChild: any, index: number) => {
                                        return (
                                          <li key={index}>
                                            <Link
                                              href={ThirdChild.href}
                                              className={clsx(
                                                'group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
                                                {
                                                  'bg-sky-100 text-blue-600':
                                                    pathname ===
                                                    ThirdChild.href,
                                                },
                                              )}
                                            >
                                              <span className="ms-8">
                                                {ThirdChild.name}
                                              </span>
                                            </Link>
                                          </li>
                                        );
                                      },
                                    )}
                                  </ul>
                                </li>
                              );
                            },
                          )}
                        </ul>
                      </li>
                    );
                  })}
                  {/* End 1 Nested Child */}
                </ul>
              </li>
            );
          })}
        </ul>
        <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
      </>
    </>
  );
}
