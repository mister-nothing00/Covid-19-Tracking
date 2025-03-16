import { Box, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import Nazione from "../componenti/grafico/Nazione";
import Hero from "../componenti/grafico/Hero";
import Province from "../componenti/grafico/paese/Province";

export default function Grafico() {
  const maxWidth = "1440px";
  return (
    <>
      <Flex
        bgGradient={"linear(to-b, white,whiteAlpha.500, gray.50, gray.100  )"}
        flexDir={"column"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        gap={8}
        height={"100vh"}
        py={"30px"}
        width={"100%"}
        maxWidth={"1440px"}
        mx={maxWidth ? "0px" : "auto"}
        overflowY={"auto"}
      >
        <Box width={"100%"} height={"auto"} mx={"auto"} px={{ base: "20px" }}>
          <Hero />
          <Nazione />
          <Divider
            mt={10}
            borderBottom={"1px solid"}
            borderColor={"gray.400 "}
            width={"100%"}
            opacity={"0.2"}
          />
          <Province />
        </Box>
      </Flex>
    </>
  );
}
