import { useCurrentUser } from '@/src/hooks/auth/useCurrentUser';
import { Skeleton } from '@mantine/core';

const Navbar = () => {
  const { user: currentUser } = useCurrentUser();

  return (
    <>
      {currentUser && currentUser.name}
      {Array(15)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} h={28} mt="sm" animate={false} />
        ))}
    </>
  );
};

export default Navbar;
