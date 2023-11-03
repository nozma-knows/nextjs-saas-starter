import AuthUI from './AuthUI';
import { getSession } from '@/app/supabase-server';
import logo from '@/assets/logo.png';
import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function SignIn() {
  const session = await getSession();

  if (session) {
    return redirect('/account');
  }

  return (
    <Flex w="full" justifyContent={'center'}>
      <Stack w="full" maxW="lg" gap={8} py={16}>
        {/* <Link  bg="red" w="fit"> */}
        <Flex w="full" justify={'center'}>
          <Link
            href={'/'}
            justifyContent={'center'}
            alignItems={'center'}
            h="28"
            aspectRatio={1 / 1}
            justifySelf={'center'}
          >
            <Box w="100%" h="100%" position={'relative'}>
              <Image
                src={logo}
                alt={'Synchronicity Labs Logo'}
                fill
                objectFit="contain"
              />
            </Box>
          </Link>
        </Flex>
        <AuthUI />
      </Stack>
    </Flex>
  );
}