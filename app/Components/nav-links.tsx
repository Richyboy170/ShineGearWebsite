"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import '@/app/globals.css';

const links = [
  { name: 'DASHBOARD', href: '/MyAccount/Dashboard' },
  { name: 'ORDERS', href: '/MyAccount/Orders' },
  { name: 'POINTS', href: '/MyAccount/Points' },
  { name: 'ACCOUNT DETAILS', href: '/MyAccount/AccountDetails' },
  { name: 'ADDRESSES', href: '/MyAccount/Addresses' },
  { name: 'LOG OUT', href: '/MyAccount/LogInAndRegister' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            "relative flex h-[48px] grow items-center justify-center border-b-2 border-x-2 border-customDarkBlue gap-2 p-3 text-sm font-medium bg-customLightBlue hover:text-customGold md:flex-none md:justify-start md:p-2 md:px-3",
            {
              'border-t-2': index === 0 || pathname === link.href,
              'bg-customLightBlue text-customGold border-3 border-customGold z-20': pathname === link.href,
              'border-customDarkBlue': pathname !== link.href,
            }
          )}
          style={{ zIndex: pathname === link.href ? 20 : 10 }}
        >
          <p className="hidden md:block">{link.name}</p>
        </Link>
      ))}
    </>
  );
}
