import { styled } from "@stitchesConfig";

const Text = styled("span", {
  variants: {
    fontSize: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
      4: {
        fontSize: "$4",
      },
      mid: {
        fontSize: "$mid",
      },
      5: {
        fontSize: "$5",
      },
      "5mid": {
        fontSize: "$5mid",
      },
      6: {
        fontSize: "$6",
      },
      7: {
        fontSize: "$7",
      },
      8: {
        fontSize: "$8",
      },
      9: {
        fontSize: "$9",
      },
      10: {
        fontSize: "$10",
      },
    },
    fontFamily: {
      OpenSans: {
        fontFamily: "$OpenSans",
      },

      mono: {
        fontFamily: "$mono",
      },
    },
    textAlign: {
      center: {
        textAlign: "center",
      },
      left: {
        textAlign: "left",
      },
      right: {
        textAlign: "right",
      },
    },
    fontWeight: {
      light: {
        fontWeight: "$1",
      },
      normal: {
        fontWeight: "$2",
      },
      medium: {
        fontWeight: "$3",
      },
      semibold: {
        fontWeight: "$4",
      },
      bold: {
        fontWeight: "$5",
      },
    },
  },
  defaultVariants: {
    fontSize: "4",
    fontWeight: "normal",
    textAlign: "left",
    fontFamily: "OpenSans",
  },
});

export default Text;
