// 'use client';
// import Header from '@/src/components/layouts/header';
// import Navbar from '@/src/components/layouts/navbar';
// import {
//   AppShell,
//   AppShellHeader,
//   AppShellMain,
//   AppShellNavbar,
// } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
//   const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

//   return (
//     <AppShell
//       header={{ height: 60 }}
//       navbar={{
//         width: 300,
//         breakpoint: 'sm',
//         collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
//       }}
//       padding="md"
//     >
//       <AppShellHeader>
//         <Header
//           mobileOpened={mobileOpened}
//           toggleMobile={toggleMobile}
//           desktopOpened={desktopOpened}
//           toggleDesktop={toggleDesktop}
//         ></Header>
//       </AppShellHeader>
//       <AppShellNavbar p="md">
//         <Navbar></Navbar>
//       </AppShellNavbar>
//       <AppShellMain>{children}</AppShellMain>
//     </AppShell>
//   );
// }
// 'use client';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
