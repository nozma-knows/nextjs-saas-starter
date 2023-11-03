'use client';

import { Box, Button, Flex, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface Props {}

const Header: FC<Props> = () => {
  const router = useRouter();
  const title = `App Name`;
  const subtitle = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae est.`;
  return (
    <Flex
      gap="8"
      px={8}
      py="16"
      alignItems={['start', 'start', 'start', 'center']}
      direction={['column', 'column', 'column', 'row']}
    >
      <Stack textColor={'white'}>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-lg">{subtitle}</p>
        <Flex justifyContent={['center', 'center', 'center', 'start']} pt={4}>
          <Button onClick={() => router.push('/signin')} w="fit">
            Get started today
          </Button>
        </Flex>
      </Stack>
      <Box
        w="full"
        // maxW="6xl"
        h="full"
        minH={'80'}
        bg="whiteAlpha.300"
        rounded="md"
      />
    </Flex>
  );
};

export default Header;
