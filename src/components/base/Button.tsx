import React from "react";
import { styled } from "@stitchesConfig";

const Button = styled("button", {
  br: "$3",
  transformOrigin: "center center",
  border: "none",
  outline: "none",
  "&:active": {
    transform: "scale(0.95)",
  },
  variants: {
    size: {
      sm: {
        px: "$6",
        py: "$3",
        fontSize: "$4",
        fontWeight: "$4",
      },
      md: {
        px: "$8",
        py: "$3",
        fontSize: "$5",
        fontWeight: "$5",
      },
    },
    color: {
      gradient: {
        color: "white",
        bg: "$gradient",
      },
      transparent: {
        color: "$gray",
        bg: "transparent",
        "&:hover": {
          bg: "rgba(0,0,0,0.08)",
        },
      },
    },
  },
  defaultVariants: {
    color: "transparent",
    size: "md",
  },
});

export default Button;
