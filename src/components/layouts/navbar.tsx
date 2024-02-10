import { Skeleton } from '@mantine/core';

const Navbar = () => {
  return (
    <>
      Aayush Kirana Pasal
      {Array(15)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} h={28} mt="sm" animate={false} />
        ))}
    </>
  );
};

export default Navbar;
