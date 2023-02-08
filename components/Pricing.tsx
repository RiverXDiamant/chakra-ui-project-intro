import React from "react";

// Chakra components
import {
  Button,
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  HStack,
  Icon,
  StackProps,
} from "@chakra-ui/react";

// Icon component
import { CheckIcon } from "../src/icons/Icon";

// ListItem component
export const ListItem = (props: StackProps) => {
  // Destructure children from props
  // Children will be rendered in between the Text elements
  const { children, ...rest } = props;

  return (
    <HStack as="li" spacing="20px" {...rest} alignItems="start">
      <Icon as={CheckIcon} w="22px" h="22px" />
      <Text textAlign={["left", "left", "center"]}>{children}</Text>
    </HStack>
  );
};

export default function Pricing() {
  return (
    <Box mx="6">
      <Box
        as="section"
        maxW="994px"
        margin="auto"
        mt="-64"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        textAlign="center"
      >
        <Flex direction={["column", "column", "row"]}>
          {/*Left Section */}
          <Box bg="#F0EAFB" p="60px">
            <Text fontSize="2xl" fontWeight="extrabold">
              Premium PRO
            </Text>
            <Heading as="h3" fontSize={["5xl", "5xl", "6xl"]} mt="4">
              $329
            </Heading>
            <Text color="171923" fontSize="lg" fontWeight="medium" mt="2">
              billed just once
            </Text>
            <Button colorScheme="purple" size="lg" w="282px" mt="6">
              Get Started
            </Button>
          </Box>
          {/*Right Section */}
          <Box p="60px" fontSize="lg" bg="white">
            <Text textAlign="left">
              Access these features when you get this pricing package for your
              business
            </Text>
            <Stack as="ul" spacing="5" pt="6">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 Support and Consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
