import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import Header from '@/components/feature-home/ui/Header';
import Instructions from '@/components/feature-home/ui/Intstructions';
import Pricing from '@/components/ui/Pricing';
import { Flex, Stack } from '@chakra-ui/react';
import { redirect } from 'next/navigation';

export default async function PricingPage() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  if (session?.user) {
    return redirect('/playground');
  }

  return (
    <Stack w="full" pb={16}>
      <Header />
      <Instructions />
      <Pricing
        session={session}
        user={session?.user}
        products={products}
        subscription={subscription}
      />
    </Stack>
  );
}
