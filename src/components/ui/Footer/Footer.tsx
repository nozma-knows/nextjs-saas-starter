import logo from '@/assets/logo.png';
import GitHub from '@/components/icons/GitHub';
import Logo from '@/components/icons/Logo';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <Flex
      justifyContent={'space-between'}
      px={8}
      py={4}
      bg={'whiteAlpha.200'}
      borderTop="1px"
      borderColor="whiteAlpha.300"
    >
      <Link href={'/'}>
        <Flex
          justifyContent={'center'}
          alignItems={'center'}
          h="8"
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
      <Flex gap={8}>
        <Link href="https://twitter.com/synclabs_ai">
          <Box color="white" fontSize="3xl">
            <FaXTwitter />
          </Box>
        </Link>
        <Link href="https://github.com/nozma-knows/nextjs-saas-starter">
          <Box color="white" fontSize="3xl">
            <FaGithub />
          </Box>
        </Link>
      </Flex>
    </Flex>
  );
}
