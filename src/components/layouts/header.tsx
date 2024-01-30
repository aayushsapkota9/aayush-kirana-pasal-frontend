// Header.js
import { useCurrentUser } from '@/src/hooks/auth/useCurrentUser';
import { useLogout } from '@/src/hooks/auth/useLogout';
import { Burger, Group } from '@mantine/core';
import { useRouter } from 'next/navigation';
import React from 'react';

interface HeaderProps {
  mobileOpened: boolean;
  toggleMobile: () => void;

  desktopOpened: boolean;
  toggleDesktop: () => void;
}

const Header: React.FC<HeaderProps> = ({
  mobileOpened,
  toggleMobile,
  desktopOpened,
  toggleDesktop,
}) => {
  const { user: currentUser, refetchUser } = useCurrentUser();

  const { logout } = useLogout();
  const router = useRouter();
  return (
    <Group h="100%" px="md">
      <Burger
        opened={mobileOpened}
        onClick={toggleMobile}
        hiddenFrom="sm"
        size="sm"
      />
      <Burger
        opened={desktopOpened}
        onClick={toggleDesktop}
        visibleFrom="sm"
        size="sm"
      />
      <div className="font-semibold">You are: {currentUser?.username}</div>
      {currentUser?.avatar && (
        <img
          width={40}
          alt=""
          className="max-w-120 max-h-80"
          src={currentUser.avatar}
        />
      )}
      <button
        onClick={() => {
          logout();
          router.push('/auth/login');
        }}
        className="mt-2 border border-solid border-black py-2 px-4 rounded cursor-pointer"
      >
        Logout
      </button>
    </Group>
  );
};

export default Header;
