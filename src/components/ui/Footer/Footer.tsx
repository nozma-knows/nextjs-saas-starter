import LogoCloud from '../LogoCloud';
import logo from '@/assets/logo.png';
import GitHub from '@/components/icons/GitHub';
import Logo from '@/components/icons/Logo';
import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const builtWithLogos = [
  {
    label: 'Synclabs.so',
    link: 'https://synclabs.so',
    img: '/synclabs.svg'
  },
  {
    label: 'Next.js',
    link: 'https://nextjs.org',
    img: '/nextjs.svg'
  },
  {
    label: 'Vercel',
    link: 'https://vercel.com',
    img: '/vercel.svg'
  },

  {
    label: 'Supabase',
    link: 'https://supabase.io',
    img: '/supabase.svg'
  },
  {
    label: 'Stripe',
    link: 'https://stripe.com',
    img: '/stripe.svg'
  }
];

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
      <Box />
      <LogoCloud title="Built with" logos={builtWithLogos} />
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
