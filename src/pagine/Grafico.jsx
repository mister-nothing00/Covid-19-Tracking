import { Box, Divider, Flex } from "@chakra-ui/react";
import React from "react";
import Nazione from "../componenti/grafico/Nazione";
import Hero from "../componenti/grafico/Hero";
import Province from "../componenti/grafico/paese/Province";

export default function Grafico() {
  return (
    <>
      <Flex
        bgGradient={"linear(to-b, white,whiteAlpha.500, gray.50, gray.100  )"}
        flexDir={"column"}
        justifyContent={"flex-start"}
        alignItems={"flex-start"}
        gap={8}
        height={"100vh"}
        py={"60px"}
        width={"100%"}
        mx={"auto"}
        overflowY={"auto"}
      >
        <Box width={"90%"} height={"auto"} mx={"auto"}>
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
