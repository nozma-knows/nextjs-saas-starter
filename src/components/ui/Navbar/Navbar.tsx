import ProfileButton from '../ProfileButton';
import s from './Navbar.module.css';
import SignOutButton from './SignOutButton';
import { createServerSupabaseClient } from '@/app/supabase-server';
import logo from '@/assets/logo.png';
// import Logo from '@/components/icons/Logo';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();
  // return (
  //   <nav className={s.root}>
  //     <a href="#skip" className="sr-only focus:not-sr-only">
  //       Skip to content
  //     </a>
  //     <div className="max-w-6xl px-6 mx-auto">
  //       <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
  //         <div className="flex items-center flex-1">
  //           <Link href="/" className={s.logo} aria-label="Logo">
  //             <Logo />
  //           </Link>
  //           <nav className="hidden ml-6 space-x-2 lg:block">
  //             <Link href="/" className={s.link}>
  //               Pricing
  //             </Link>
  //             {user && (
  //               <Link href="/account" className={s.link}>
  //                 Account
  //               </Link>
  //             )}
  //           </nav>
  //         </div>
  //         <div className="flex justify-end flex-1 space-x-8">
  //           {user ? (
  //             <SignOutButton />
  //           ) : (
  //             <Link href="/signin" className={s.link}>
  //               Sign in
  //             </Link>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // );

  return (
    <Flex
      flexDir={'row'}
      w={'100%'}
      alignItems={'center'}
      zIndex={'1500'}
      justifyContent={'space-between'}
      bg="whiteAlpha.200"
      py={4}
      px={[4, 4, 4, 8]}
      borderBottom="1px"
      borderColor="RGBA(255,255,255,0.05)"
    >
      <Link href={'/'}>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          h="12"
          aspectRatio={1 / 1}
        >
          <Box w="100%" h="100%" position={'relative'}>
            <Image
              src={logo}
              alt={'Synchronicity Labs Logo'}
              fill
              objectFit="contain"
            />
          </Box>
        </Flex>
      </Link>
      {user ? (
        <ProfileButton user={user} />
      ) : (
        <Link href="/signin" className={s.link}>
          Sign in
        </Link>
      )}
      {/* <div className="max-w-6xl px-6 mx-auto">
          <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
            <div className="flex items-center flex-1">
              <Link href="/" className={s.logo} aria-label="Logo">
                <Logo />
              </Link>
              <nav className="hidden ml-6 space-x-2 lg:block">
                <Link href="/" className={s.link}>
                  Pricing
                </Link>
                {user && (
                  <Link href="/account" className={s.link}>
                    Account
                  </Link>
                )}
              </nav>
            </div>
            <div className="flex justify-end flex-1 space-x-8">
              {user ? (
                <SignOutButton />
              ) : (
                <Link href="/signin" className={s.link}>
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </div> */}
    </Flex>
  );
}
