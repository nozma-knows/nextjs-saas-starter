import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import Header from '@/components/feature-home/ui/Header';
import Instructions from '@/components/feature-home/ui/Intstructions';
import Pricing from '@/components/ui/Pricing';
import { Stack } from '@chakra-ui/react';

export default async function PricingPage() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <Stack w="full" pb={16}>
      <Header />
      <Instructions />
      {!session?.user && (
        <Pricing
          session={session}
          user={session?.user}
          products={products}
          subscription={subscription}
        />
      )}
    </Stack>
  );
}
