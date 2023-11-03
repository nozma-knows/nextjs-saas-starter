import { getSession } from '../supabase-server';
import { Flex, Stack, Text } from '@chakra-ui/react';
import { redirect } from 'next/navigation';

export default async function Usage() {
  const session = await getSession();

  if (!session) {
    return redirect('/signin');
  }

  return (
    <Flex w="full" px={4} justifyContent={'center'} color="white">
      <Stack w="full" maxW="4xl" py={8} gap={0}>
        <Text
          textAlign={'start'}
          fontSize={['4xl', '6xl']}
          fontWeight="extrabold"
          color="white"
          className="sm:text-center"
        >
          Usage
        </Text>
      </Stack>
    </Flex>
  );
}
