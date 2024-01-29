// Header.js
import { Burger, Group } from '@mantine/core';
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
    </Group>
  );
};

export default Header;
