'use client';
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { links } from '@/app/ui/components/links';
import NavFirstChild from '@/app/ui/components/NavFirstChild';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.

export default function NavLinks() {
  const pathname = usePathname();

  return links.map((link) => {
    const LinkIcon = link.icon;

    // Use a unique identifier from your data structure if available
    const uniqueKey = link.id || link.name;

    return !link.childs ? (
      <Link
        key={uniqueKey}
        href={link.href}
        className={clsx(
          'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
          {
            'bg-sky-100 text-blue-600': pathname === link.href,
          },
        )}
      >
        <LinkIcon className="w-6" />
        <p className="hidden md:block">{link.name}</p>
      </Link>
    ) : (
      <>
        <Accordion
          key={uniqueKey}
          className={clsx(
            'rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-blue-600 hover:bg-sky-100 md:flex-none md:justify-start md:p-2 md:px-3',
          )}
        >
          <AccordionItem
            key={uniqueKey}
            aria-label={link.name}
            title={
              <div className="flex grow items-center justify-center gap-2 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start">
                <LinkIcon className="w-6" />
                <span>{link.name}</span>
              </div>
            }
          >
            {link.childs.map((firstChild) => {
              const firstChildKey = firstChild.id || firstChild.name;

              return !firstChild.childs ? (
                <Link
                  key={firstChildKey}
                  href={firstChild.href}
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                  {firstChild.name}
                </Link>
              ) : (
                <Accordion
                  key={firstChildKey}
                  className={clsx(
                    'rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-blue-600 hover:bg-sky-100 md:flex-none md:justify-start md:p-2 md:px-3',
                  )}
                >
                  <AccordionItem
                    key={firstChildKey}
                    aria-label={firstChild.name}
                    title={<span>{firstChild.name}</span>}
                  >
                    {firstChild.childs.map((secondChild) => {
                      const secondChildKey = secondChild.id || secondChild.name;

                      return !secondChild.childs ? (
                        <Link
                          key={secondChildKey}
                          href={secondChild.href}
                          className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                        >
                          {secondChild.name}
                        </Link>
                      ) : (
                        <Accordion
                          key={secondChildKey}
                          className={clsx(
                            'rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-blue-600 hover:bg-sky-100 md:flex-none md:justify-start md:p-2 md:px-3',
                          )}
                        >
                          <AccordionItem
                            key={secondChildKey}
                            aria-label={secondChild.name}
                            title={<span>{secondChild.name}</span>}
                          >
                            {secondChild.childs.map((thirdChild) => {
                              const thirdChildKey =
                                thirdChild.id || thirdChild.name;

                              return (
                                <Link
                                  key={thirdChildKey}
                                  href={thirdChild.href}
                                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                                >
                                  {thirdChild.name}
                                </Link>
                              );
                            })}
                          </AccordionItem>
                        </Accordion>
                      );
                    })}
                  </AccordionItem>
                </Accordion>
              );
            })}
          </AccordionItem>
        </Accordion>
      </>
    );
  });
}
