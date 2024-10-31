import { Divider, Text } from "@chakra-ui/react";
import React from "react";

export default function Hero() {
  return (
    <>
      <Text
        fontFamily={"Montserrat"}
        fontWeight={"bold"}
        fontSize={{ base: "4xl", md: "6xl" }}
        width={{ base: "90%", md: "100%" }}
        color={"blue.900"}
      >
        Monitora i casi Covid-19
      </Text>
      <Text
        color={"gray.400"}
        width={{base:"100%", md:"80%"}}
        mt={4}
        fontFamily={"Lora"}
        fontSize={{ base: "xs", md: "sm" }}
        fontStyle={"italic"}
        lineHeight={"6"}
        letterSpacing={0.5}
      >
        La nostra applicazione consente di monitorare e visualizzare l’andamento
        dei casi COVID-19 in modo semplice e intuitivo. Utilizzando il campo di
        ricerca, è possibile inserire  nazione americana o la provincia,
        come Alabama o Stati Uniti, e selezionare una data
        specifica. <br /> <br />
        Dopo aver effettuato la ricerca, l’applicazione mostrerà grafici
        dettagliati che illustrano i dati relativi ai casi COVID-19 per l'area e
        il periodo selezionati, inclusi i casi giornalieri, i ricoveri e altre
        informazioni rilevanti. <br/>
        Questo strumento è pensato per fornire un
        accesso immediato e aggiornato a dati critici, permettendo agli utenti
        di monitorare l’andamento dei casi e avere una visione chiara e
        tempestiva della situazione nelle varie località americane.
      </Text>
      <Divider
            mt={4}
            borderBottom={"0.5px solid"}
            borderColor={"gray.500 "}
            width={"100%"}
            opacity={"0.1"}
          />
    </>
  );
}
