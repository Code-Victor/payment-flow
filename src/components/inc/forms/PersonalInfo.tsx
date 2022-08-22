import { Box, Text, Input, Flex, Button, Select } from "@components/base";
import React from "react";
import type { StepWizardChildProps } from "react-step-wizard";

import type {
  UseFormRegister,
  FieldErrorsImpl,
  UseFormTrigger,
  UseFormReset,
} from "react-hook-form";
import type { form } from "../MultistepForm";
const PersonalInfo = ({
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
      "name",
      "email",
      "address1",
      "address2",
      "localGovernment",
      "state",
    ]);
    return result;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    proceed().then((result) => {
      if (result) {
        goToStep?.(2);
      }
    });
  };
  return (
    <Box as="form" css={{ spacey: "$5" }} onSubmit={handleSubmit}>
      <Input
        id="name"
        label="Name"
        errored={!!errors.name}
        message={errors.name?.message}
        register={register("name", { required: "your name is required" })}
      />
      <Input
        id="email"
        label="Email Address *"
        errored={!!errors.email}
        message={errors.email?.message}
        register={register("email", { required: "your email is required" })}
      />
      <Input
        id="adress1"
        label={`Address 1 `}
        errored={!!errors.address1}
        message={errors.address1?.message}
        register={register("address1", {
          required: "your address is required",
        })}
      />
      <Input
        id="address2"
        label="Adress 2"
        errored={!!errors.address2}
        register={register("address2")}
      />
      <Flex gap="3">
        <Box css={{ flex: 2 }}>
          <Input
            label="Local Government"
            id="lg"
            errored={!!errors.localGovernment}
            message={errors.localGovernment?.message}
            register={register("localGovernment")}
          />
        </Box>
        <Box css={{ flex: 1 }}>
          <Select
            id="state"
            label="State"
            errored={!!errors.state}
            message={errors.state?.message}
            register={register("state", { required: "required" })}
            options={["lagos", "ogun", "niger"]}
          />
        </Box>
      </Flex>
      <Flex gap={"3"}>
        <Button
          type="submit"
          size={{ "@initial": "sm", "@md": "md" }}
          color="gradient"
        >
          Next
        </Button>
        <Button
          size={{ "@initial": "sm", "@md": "md" }}
          type="button"
          onClick={() => {
            reset();
            goToStep?.(1);
          }}
          color="transparent"
        >
          Cancel Payment
        </Button>
      </Flex>
    </Box>
  );
};

export default PersonalInfo;
