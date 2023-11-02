import ProfileButton from '../ProfileButton';
import s from './Navbar.module.css';
import SignOutButton from './SignOutButton';
import { createServerSupabaseClient } from '@/app/supabase-server';
import logo from '@/assets/logo.png';
// import Logo from '@/components/icons/Logo';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default async function Navbar() {
  const supabase = createServerSupabaseClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <Flex
      flexDir={'row'}
      w="full"
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
              style={{
                objectFit: 'contain'
              }}
            />
          </Box>
        </Flex>
      </Link>
      {user ? (
        <ProfileButton user={user} />
      ) : (
        <Button>
          <Link href="/signin">Sign in</Link>
        </Button>
      )}
    </Flex>
  );
}
