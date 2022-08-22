import React from "react";
import { Box, Text } from "@components/base";
import { styled } from "@stitchesConfig";
import type { UseFormRegisterReturn } from "react-hook-form";

interface BaseProps {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
  options: string[];
}
type Error = {
  errored: boolean;
  message?: string;
};

const BaseSelect = styled("select", {
  width: "100%",
  fontSize: "$5",
  border: "1px solid $gray",
  bg: "white",
  br: "$3",
  py: 17,
  px: 27,

  variants: {
    error: {
      true: {
        border: "1px solid red",
      },
    },
  },
});
type SelectProps = BaseProps & Error;

const Select = ({
  label,
  id,
  errored,
  message,
  register,
  options,
}: SelectProps) => {
  return (
    <Box css={{ spacey: "$3" }}>
      <Text as="label" htmlFor={id} fontSize={5} fontWeight="bold">
        {label}
      </Text>
      <BaseSelect error={errored} id={id} {...register}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </BaseSelect>
      {errored && (
        <Text
          fontSize={"3"}
          fontWeight="medium"
          css={{ mt: "0", color: "red" }}
        >
          {message}
        </Text>
      )}
    </Box>
  );
};

export default Select;
