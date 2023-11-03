import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {}

const Instructions: FC<Props> = () => {
  const title = `How it works`;
  const subtitle = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae est.`;

  const steps = [
    {
      title: 'Step 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae est.'
    },
    {
      title: 'Step 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae est.'
    },
    {
      title: 'Step 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae est.'
    }
  ];

  return (
    <Flex bg="whiteAlpha.100" rounded="md">
      <Stack gap="8" px="8" py="16" alignItems={'center'} textColor={'white'}>
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-lg">{subtitle}</p>
        <Stack w="full" gap={8}>
          {steps.map(({ title, description }, index) => {
            return (
              <Stack key={title} w="full" px={[0, 0, 8]} gap={8}>
                <Flex alignItems={'center'} fontWeight="bold" gap={4}>
                  <Flex
                    w="12"
                    h="12"
                    rounded="md"
                    justifyContent={'center'}
                    alignItems={'center'}
                    bg="whiteAlpha.200"
                  >
                    <Text fontSize="2xl">{index + 1}</Text>
                  </Flex>
                  <Text fontSize="lg">{title}</Text>
                </Flex>
                <Stack px={[0, 0, 16]} gap={8}>
                  <Box w="full" h={80} bg="whiteAlpha.200" rounded={'md'} />
                  <Text>{description}</Text>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Instructions;
