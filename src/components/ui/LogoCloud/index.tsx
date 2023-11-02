import { Box, Flex, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  title: string;
  logos: { label: string; link: string; img: string }[];
}

const LogoCloud: FC<Props> = ({ title, logos }) => {
  // return (
  //   <div>
  //     <p className="mt-24 text-xs uppercase text-zinc-400 text-center font-bold tracking-[0.3em]">
  //       Built using
  //     </p>
  //     <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-5">
  //       <div className="flex items-center justify-start">
  //         <a href="https://synclabs.so" aria-label="Synclabs.so Link">
  //           <img
  //             src="/synclabs.svg"
  //             alt="Next.js Logo"
  //             className="h-12 text-white"
  //           />
  //         </a>
  //       </div>
  //       <div className="flex items-center justify-start">
  //         <a href="https://nextjs.org" aria-label="Next.js Link">
  //           <img
  //             src="/nextjs.svg"
  //             alt="Next.js Logo"
  //             className="h-12 text-white"
  //           />
  //         </a>
  //       </div>
  //       <div className="flex items-center justify-start">
  //         <a href="https://vercel.com" aria-label="Vercel.com Link">
  //           <img
  //             src="/vercel.svg"
  //             alt="Vercel.com Logo"
  //             className="h-6 text-white"
  //           />
  //         </a>
  //       </div>
  //       <div className="flex items-center justify-start">
  //         <a href="https://stripe.com" aria-label="stripe.com Link">
  //           <img
  //             src="/stripe.svg"
  //             alt="stripe.com Logo"
  //             className="h-12 text-white"
  //           />
  //         </a>
  //       </div>
  //       <div className="flex items-center justify-start">
  //         <a href="https://supabase.io" aria-label="supabase.io Link">
  //           <img
  //             src="/supabase.svg"
  //             alt="supabase.io Logo"
  //             className="h-10 text-white"
  //           />
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // );
  console.log('logos: ', logos);
  return (
    <Flex color="white" alignItems="center" gap={4}>
      <Text className="uppercase" fontSize="sm" fontWeight="bold">
        {title}
      </Text>
      {logos.map(({ label, link, img }) => {
        return (
          <Flex
            justifyContent={'center'}
            bg="whiteAlpha.400"
            px={2}
            py={1}
            rounded="md"
          >
            <Link href={link} w={16} h={6}>
              <Box w="100%" h="100%" position={'relative'}>
                <Image src={img} alt={`${label} logo`} fill />
              </Box>
            </Link>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default LogoCloud;
