'use client';
import { sidebarConfig } from '@/src/config/sidebarConfig';
import { useCurrentUser } from '@/src/hooks/auth/useCurrentUser';
import { NavLink } from '@mantine/core';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const { user: currentUser } = useCurrentUser();
  const pathname = usePathname();

  const isLinkActive = (link: string) => pathname === link;

  return (
    <>
      {currentUser && currentUser.name}
      {sidebarConfig.map((item) => (
        <NavLink
          key={item.label}
          label={item.label}
          href={item.link}
          active={isLinkActive(item.link)}
        />
      ))}
    </>
  );
};

export default Navbar;
