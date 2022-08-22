import React, { useState } from "react";
import { Box, Text, Input, Button, Select, Flex } from "@components/base";
import type {
  UseFormRegister,
  UseFormTrigger,
  FieldErrorsImpl,
  UseFormReset
} from "react-hook-form";
import type { StepWizardChildProps } from "react-step-wizard";

import type { form } from "../MultistepForm";

const BillingInfo = ({
  register,
  errors,
  trigger,
  goToStep,
  reset,
}: {
  register: UseFormRegister<form>;
  errors: FieldErrorsImpl<form>;
  trigger: UseFormTrigger<form>;
  reset: UseFormReset<form>;
} & Partial<StepWizardChildProps>) => {
  const proceed = async () => {
    const result = await trigger([
      "cardName",
      "cardDetail",
      "cardExpiry",
      "cardCvv",
    ]);
    return result;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    proceed().then((result) => {
      if (result) {
        goToStep?.(3);
      }
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box css={{ spacey: "$5", mb: "$5" }}>
        <Input
          id="nameOnCard"
          label="Name on Card"
          errored={!!errors.cardName}
          message={errors.cardName?.message}
          register={register("cardName", {
            required: "your card name is required",
          })}
        />
        <Select
          id="cardType"
          label="Card Type"
          errored={!!errors.cardType}
          message={errors.cardType?.message}
          options={["Visa", "MasterCard", "Moneygram"]}
          register={register("cardType", { required: "type card is required" })}
        />
        <Flex gap={4}>
          <Box css={{ flex: 2 }}>
            <Input
              type="number"
              id="cardDetails"
              label="Card details"
              errored={!!errors.cardDetail}
              message={errors.cardDetail?.message}
              register={register("cardDetail", {
                required: "card detail is required",
              })}
            />
          </Box>
          <Flex gap={3} css={{ flex: 2, "&>*": { flex: 1 } }}>
            <Input
              id="expDate"
              type="number"
              label="Expiry date"
              errored={!!errors.cardExpiry}
              message={errors.cardExpiry?.message}
              register={register("cardExpiry", {
                required: "required",
              })}
            />
            <Input
              id="cvv"
              label="CVV"
              type="number"
              errored={!!errors.cardCvv}
              message={errors.cardCvv?.message}
              register={register("cardCvv", {
                required: "required",
              })}
            />
          </Flex>
        </Flex>
      </Box>
      <Flex gap={"3"}>
        <Button
          type="submit"
          size={{ "@initial": "sm", "@md": "md" }}
          color="gradient"
        >
          Next
        </Button>
        <Button
          type="button"
          onClick={() => {
            reset();
            goToStep?.(1);
          }}
          size={{ "@initial": "sm", "@md": "md" }}
          color="transparent"
        >
          Cancel Payment
        </Button>
      </Flex>
    </form>
  );
};

export default BillingInfo;
