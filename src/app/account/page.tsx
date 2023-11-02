import ManageSubscriptionButton from './ManageSubscriptionButton';
import {
  getSession,
  getActiveProductsWithPrices,
  getSubscription
} from '@/app/supabase-server';
import Pricing from '@/components/Pricing';
import Button from '@/components/ui/Button';
import { Database } from '@/types_db';
import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default async function Account() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  const user = session?.user;

  if (!session) {
    return redirect('/signin');
  }

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscription?.prices?.currency!,
      minimumFractionDigits: 0
    }).format((subscription?.prices?.unit_amount || 0) / 100);

  return (
    <Flex w="full">
      <Stack w="full" maxW="6xl" px={4} py={8} alignItems={'center'} gap={0}>
        <Text
          fontSize={['4xl', '6xl']}
          fontWeight="extrabold"
          color="white"
          className="sm:text-center"
        >
          Account
        </Text>
        <Card
          title="Your Plan"
          description={
            subscription
              ? `You are currently on the ${subscription?.prices?.products?.name} plan.`
              : 'You are not currently subscribed to any plan.'
          }
          footer={<ManageSubscriptionButton session={session} />}
        >
          <Box mt={8} mb={4} fontSize="xl" fontWeight="semibold">
            {subscription ? (
              <Text color="gray.50">{`${subscriptionPrice}/${subscription?.prices?.interval}`}</Text>
            ) : (
              <Link href="/">Choose your plan</Link>
            )}
          </Box>
        </Card>
        <Pricing
          session={session}
          user={session?.user}
          products={products}
          subscription={subscription}
        />
      </Stack>
    </Flex>
  );
}

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

function Card({ title, description, footer, children }: Props) {
  return (
    <Stack
      w="full"
      maxW="3xl"
      my={8}
      rounded={'md'}
      border={'2px solid'}
      borderColor="whiteAlpha.400"
    >
      <div className="px-5 py-4">
        <Text fontSize="2xl" fontWeight="md" color="white">
          {title}
        </Text>
        <Text color="gray.50">{description}</Text>
        {children}
      </div>
      <Box
        p={4}
        borderTop={'1px solid'}
        borderColor="whiteAlpha.400"
        bg="whiteAlpha.200"
        color="white"
      >
        {footer}
      </Box>
    </Stack>
  );
}
