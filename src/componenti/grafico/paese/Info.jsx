import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import GraficoProvince from "./GraficoProvince";

export default function Info({ date, iso, region, province }) {
  return (
    <>
      <Heading
      fontFamily={"Montserrat"}
      letterSpacing={0.5}
        color={"blue.900"}
        textAlign={"center"}
        mt={20}
        
      >
        Risultati
      </Heading>
      <Box
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={2}
        width={"100%"}
        mx={"auto"}
        my={20}
        
      >
        <Text
          color={"blue.700"}
          fontFamily={"Lora"}
          fontSize={"sm"}
          fontWeight={"normal"}
         
        >
          <b>ISO</b>: {iso}
        </Text>
        <Text
          color={"blue.700"}
          fontFamily={"Lora"}
          fontSize={"sm"}
          fontWeight={"normal"}
        >
          <b>Stato</b>: {region}
        </Text>
        <Text
           color={"blue.700"}
           fontFamily={"Lora"}
           fontSize={"sm"}
           fontWeight={"normal"}
        >
          <b>Provincia</b>: {province}
        </Text>
        <Text
          color={"blue.700"}
          fontFamily={"Lora"}
          fontSize={"sm"}
          fontWeight={"normal"}
        >
          <b>Data</b>: {date}
        </Text>
      </Box>

      {/*Componente in cui si visualizzano i dettagli * */}
      <GraficoProvince date={date} iso={iso} region={region} province={province} />
    </>
  );
}
