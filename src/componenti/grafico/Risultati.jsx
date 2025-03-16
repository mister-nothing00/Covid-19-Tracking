import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import CardInfo from "./CardInfo";

export default function Risultati({ date, region }) {
  return (
    <>
      <Heading
        fontFamily={"Montserrat"}
        fontWeight={"semibold"}
        letterSpacing={0.5}
        color={"blue.700"}
        textAlign={"center"}
        mt={"60px"}
      >
        Results
      </Heading>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"90%"}
        mx={"auto"}
        my={20}
      >
        <Text
          fontFamily={"Lora"}
          fontWeight={"normal"}
          color={"blue.900"}
          fontSize={"md"}
        >
          <b>Data</b>: {date}
        </Text>

        <Text
         fontFamily={"Lora"}
         fontWeight={"normal"}
         color={"blue.900"}
         fontSize={"md"}
        >
          <b>Paese</b>: {region}
        </Text>
      </Box>

      {/*Componente in cui si visualizzano i dettagli * */}
      <CardInfo date={date} region={region} />
    </>
  );
}
