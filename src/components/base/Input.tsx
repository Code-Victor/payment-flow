import { styled } from "@stitchesConfig";
import { Box, Text } from "@components/base";
import type { UseFormRegisterReturn } from "react-hook-form";
import type { HTMLInputTypeAttribute } from "react";

interface BaseProps {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
}
type Error = {
  errored: boolean;
  message?: string;
};

const BaseInput = styled("input", {
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

type InputProps = BaseProps &
  Error &
  Pick<JSX.IntrinsicElements["input"], "type" | "onChange" | "value">;
const Input = ({ label, id, errored, message, register,...input }: InputProps) => {
  return (
    <Box css={{ spacey: "$3" }}>
      <Text as="label" htmlFor={id} fontSize={5} fontWeight="bold">
        {label}
      </Text>
      <BaseInput {...input} error={errored} id={id} {...register} />
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

export default Input;
