import { Box, Container, Text } from "@components/base";
import { MultistepForm } from "@components/inc";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Box css={{ position: "relative", overflow: "hidden" }}>
      <Box
        css={{
          width: "150vw",
          zIndex:'-1',
          transform: "rotate(-15deg) translate(-5%,-50%)",
          height: "80vh",
          position: "absolute",
          top: 0,
          left: 0,
          bg: "$orange",
          opacity: 0.4,
        }}
      />
      <Head>
        <title>Payment Flow</title>
        <meta name="description" content="A simple multistep work flow for a payment system "/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container css={{ overflow: "hidden", minHeight: "100vh" }}>
        <MultistepForm />
      </Container>
    </Box>
  );
};

export default Home;
