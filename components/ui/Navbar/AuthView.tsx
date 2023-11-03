'use client';

import ProfileButton from '../ProfileButton';
import { Flex, Link, Text } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

interface Props {
  user: User;
  pages: { label: string; icon: JSX.Element; route: string }[];
}
const AuthView: FC<Props> = ({ user, pages }) => {
  const pathname = usePathname();
  return (
    <Flex gap={4}>
      <Flex gap={2}>
        {pages.map(({ label, icon, route }) => {
          const onPath = pathname === route;
          return (
            <Link key={route} href={route}>
              <Flex
                alignItems="center"
                gap={'2'}
                py="1"
                px="2"
                rounded="md"
                color={onPath ? 'white' : 'whiteAlpha.600'}
                _hover={
                  onPath
                    ? {
                        bg: 'whiteAlpha.200'
                      }
                    : {
                        color: 'whiteAlpha.800',
                        bg: 'whiteAlpha.200'
                      }
                }
              >
                {icon}
                <Text fontWeight="bold">{label}</Text>
              </Flex>
            </Link>
          );
        })}
      </Flex>
      <ProfileButton user={user} />
    </Flex>
  );
};

export default AuthView;
