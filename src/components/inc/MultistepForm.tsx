import { Flex, Box, Text } from "@components/base";
import React, { FC, useEffect } from "react";
import StepWizard, { StepWizardChildProps } from "react-step-wizard";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { BillingInfo, Confirm, PersonalInfo } from "./forms";

export interface form {
  name: string;
  email: string;
  address1: string;
  address2: string;
  localGovernment: string;
  state: string;
  cardName: string;
  cardType: string;
  cardDetail: number;
  cardExpiry: string;
  cardCvv: number;
}
const MultistepForm = () => {
  const {
    register,
    reset,
    getValues,
    formState: { errors },
    trigger,
  } = useForm<form>();
  const [completed, setCompleted] = React.useState(false);
  useEffect(() => {
    if (completed) {
      console.log(getValues());
      alert("Check the console for the form data");
    }
  }, [completed, getValues]);
  return (
    <>
      {completed ? (
        <Box
          css={{
            bs: "$primary",
            bg: "white",
            br: "$4",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            maxWidth: 710,
            width: "95%",
            py: "$8",
            px: "$2",
          }}
        >
          <Box
            css={{
              mx: "auto",
              size: 84,
              br: "$round",
              display: "grid",
              placeItems: "center",
              bs: "$primary",
            }}
          >
            <svg
              width="48"
              height="35"
              viewBox="0 0 48 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M46.5037 6.7984L19.3597 33.7552C17.9677 35.1376 15.7637 35.1376 14.3717 33.7552L1.49566 20.968C0.10366 19.5856 0.10366 17.3968 1.49566 16.0144C2.88766 14.632 5.09166 14.632 6.48366 16.0144L16.8657 26.3248L41.5157 1.8448C42.9077 0.462399 45.1117 0.462399 46.5037 1.8448C47.8957 3.2272 47.8957 5.416 46.5037 6.7984Z"
                fill="#6FCF97"
              />
            </svg>
          </Box>
          <Box css={{ maxWidth: 500, spacey: "$5", mx: "auto" }}>
            <Text as="h1" fontSize={"8"} css={{ color: "$gray" }}>
              Purchase Completed
            </Text>
            <Text as="p" fontSize={"5"}>
              Please check your email for details concerning this transaction
            </Text>
            <Text
              as="a"
              href="#"
              fontSize={"5"}
              css={{
                display: "block",
                textDecoration: "underline",
                color: "$orange",
              }}
            >
              Return Home
            </Text>
          </Box>
        </Box>
      ) : (
        <Box css={{ mb: "$4" }}>
          <Text
            as="h1"
            fontSize="8"
            fontWeight="bold"
            css={{ color: "$gray", pt: "$5", "@md": { pt: 180 } }}
          >
            Complete your Purchase
          </Text>
          <StepWizard nav={<FormNav />}>
            <PersonalInfo {...{ register, errors, trigger, reset: reset }} />
            <BillingInfo {...{ register, errors, trigger, reset: reset }} />
            <Confirm
              {...{ onComplete: () => setCompleted(true), reset: reset }}
            />
          </StepWizard>
        </Box>
      )}
    </>
  );
};

const navs = ["Personal Info", "Billing Info", "Confirm Payment"];
const FormNav: FC<Partial<StepWizardChildProps>> = ({
  currentStep,
  goToStep,
}) => {
  const move = (goTo: number) => {
    if (currentStep! > goTo) {
      goToStep?.(goTo);
    }
  };
  return (
    <Box css={{ mt: "$5", mb: "$5", "@md": { mb: "$9" } }}>
      <Flex>
        {navs.map((nav, i) => {
          return (
            <Box key={i} onClick={() => move(i + 1)} css={{ flex: 1 }}>
              <Text
                textAlign="center"
                fontSize="6"
                fontWeight={"bold"}
                css={{
                  transition: "all 0.2s ease-in-out",

                  justifyContent: "space-between",
                  color: currentStep === i + 1 ? "orange" : "$gray4",
                }}
                as="h2"
              >
                {nav}
              </Text>
              {currentStep === i + 1 && (
                <Box
                  initial={{ y: 16.5 }}
                  animate={{ y: 16.5 }}
                  as={motion.div}
                  layoutId="tab-index"
                  css={{
                    bg: "$orange",
                    height: 13,
                    br: 10,
                  }}
                ></Box>
              )}
            </Box>
          );
        })}
      </Flex>
      <Box css={{ height: 1, mt: "$2", bg: "$primary" }} />
    </Box>
  );
};
export default MultistepForm;
