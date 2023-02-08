import React, { ElementType } from "react";

import { Box, HStack, Icon, Text, StackProps } from "@chakra-ui/react";

// Icons components
import {
  MoneyBackGuaranteeIcon,
  HassleFreeIcon,
  MonthlySubscriptionIcon,
} from "../src/icons/Icon";

interface FeatureProps extends StackProps {
  icon: ElementType;
}

function Feature(props: FeatureProps) {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6" align="start">
      <Icon as={icon} boxSize={["8", "8", "12"]} />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
}

export default function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="8">
      <HStack
        px="12"
        direction={["column", "column", "row"]}
        spacing={["6", "6", "5"]}
      >
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 Days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fess 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No Monthly subscription Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
}
