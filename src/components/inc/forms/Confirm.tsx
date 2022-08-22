import React from "react";
import { Box, Flex, Text, Button } from "@components/base";
import type { StepWizardChildProps } from "react-step-wizard";
import type { UseFormReset } from "react-hook-form";
import type { form } from "../MultistepForm";
const Confirm = ({
  goToStep,
  onComplete,
  reset,
}: {
  onComplete: () => void;
  reset: UseFormReset<form>;
} & Partial<StepWizardChildProps>) => {
  const tableHeader = ["Item Name", "₦ Price"];
  const costs = [
    {
      name: "Data science and usability",
      price: "50,000.00",
    },
    {
      name: "Shipping",
      price: "0.00",
    },
  ];
  return (
    <form>
      <Box css={{ mt: "$6", mb: "$6", pb: "$5", br: "$4", bs: "$primary" }}>
        <Flex
          gap="6"
          css={{
            btrr: "$4",
            btlr: "$4",
            bg: "#2F80ED",
            px: "$6",
            color: "white",
            "&>*": { flex: 1 },
          }}
        >
          {tableHeader.map((head, i) => (
            <Text
              as="h2"
              key={head}
              fontWeight="bold"
              textAlign={i === 0 ? "left" : "right"}
              css={{ py: "$5" }}
            >
              {head}
            </Text>
          ))}
        </Flex>
        <Box css={{ pt: "$8", pb: "$5", bg: "white", px: "$6" }}>
          {costs.map(({ name, price }, i) => {
            return (
              <Flex
                gap="6"
                key={i}
                css={{
                  "&>*": { flex: 1 },
                }}
              >
                <Text
                  textAlign={"left"}
                  fontSize="5"
                  css={{ py: "$5", color: "$gray" }}
                  as="p"
                >
                  {name}
                </Text>
                <Text
                  fontSize="5"
                  textAlign={"right"}
                  css={{ py: "$5", color: "black" }}
                  as="p"
                >
                  {price}
                </Text>
              </Flex>
            );
          })}
        </Box>
        <Box css={{ height: 1, mx: "$3", bg: "black" }} />
        <Flex
          justify="between"
          css={{
            py: "$3",
            px: "$5",
            mx: "$6",
            mt: "$5",
            br: "$2",
            border: "1px solid $gray2",
          }}
        >
          <Text fontSize={5}>Total</Text>
          <Text fontWeight="bold" fontSize={5} css={{ color: "$gray" }}>
            50,000.00
          </Text>
        </Flex>
      </Box>
      <Flex gap={"3"}>
        <Button
          size={{ "@initial": "sm", "@md": "md" }}
          type="submit"
          onClick={onComplete}
          color="gradient"
        >
          Complete
        </Button>
        <Button
          onClick={() => {
            reset();
            goToStep?.(1);
          }}
          size={{ "@initial": "sm", "@md": "md" }}
          type="button"
          color="transparent"
        >
          Cancel Payment
        </Button>
      </Flex>
    </form>
  );
};

export default Confirm;
