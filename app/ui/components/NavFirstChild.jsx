'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import NavSecondChild from '@/app/ui/components/NavSecondChild';

export default function NavFirstChild({ link, LinkIcon }) {
  const pathname = usePathname();
  return (
    <>
      {!link.childs ? (
        <Link
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
        <Accordion
          className={clsx(
            'rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-blue-600 hover:bg-sky-100 md:flex-none md:justify-start md:p-2 md:px-3',
          )}
        >
          <AccordionItem
            aria-label={link.name}
            // title={link.name}
            title={
              <div className="flex grow items-center justify-center gap-2 font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start">
                <LinkIcon className="w-6" />
                <span>{link.name}</span>
              </div>
            }
          >
            {link.childs.map((firstChild, index) => {
              return (
                <Link
                  key={index}
                  href={firstChild.href}
                  className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                  {firstChild.name}
                </Link>
              );
            })}
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
}
