import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="section" pb="28">
      <Box color="#F7FAFC" bg="purple.600" pt="90px" pb="198px" px="8">
        <Heading fontWeight="extrabold" fontSize="5xl">
          Simple pricing for your business
        </Heading>
        <Text fontWeight="medium" fontSize="2xl" pt="4">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
}
