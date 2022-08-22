import { styled } from "@stitchesConfig";

const Container = styled("div", {
  width: "100%",
  margin: "0 auto",
  maxWidth: "710px",
  variants: {
    padding: {
      none: {},
      "1": {
        px: "0.8rem",
      },
      "2": {
        px: "1rem",
      },
      "3": {
        px: "1.5rem",
      },
    },
  },
  defaultVariants: {
    padding: "1",
  },
});
export default Container;
