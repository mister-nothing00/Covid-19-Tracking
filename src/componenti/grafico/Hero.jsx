import { Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Hero() {
  return (
    <>
      <Heading
        fontFamily={"Montserrat"}
        fontWeight={"bold"}
        fontSize={{ base: "4xl", md: "6xl" }}
        width={{ base: "90%", md: "100%" }}
        color={"blue.900"}
        mb={4}
      >
        Tieni Sotto Controllo la Pandemia con i Nostri Grafici Interattivi
      </Heading>
      <Text
        color={"gray.600"}
        width={{base:"100%", md:"80%"}}
        mt={4}
        fontFamily={"Lora"}
        fontSize={{ base: "md", md: "lg" }}
        lineHeight={"7"}
        letterSpacing={0.5}
      >
        La nostra innovativa web app ti permette di monitorare l'evoluzione del Covid-19 negli Stati Uniti in modo semplice e intuitivo. Basta inserire il nome di uno stato o di una contea nel campo di ricerca e selezionare un intervallo di date per accedere a grafici dettagliati e sempre aggiornati.
        <br /><br />
        In pochi click, potrai visualizzare l'andamento dei contagi, dei ricoveri e di altri indicatori chiave nella zona di tuo interesse. Avrai a portata di mano tutte le informazioni necessarie per comprendere la situazione epidemiologica locale e prendere decisioni consapevoli per proteggere te stesso e i tuoi cari.
        <br /><br />
        Che tu sia un cittadino preoccupato, un operatore sanitario o un decisore pubblico, la nostra app ti fornirà i dati di cui hai bisogno in modo chiaro e tempestivo. Unisciti alle migliaia di persone che già si affidano a noi per restare informate sulla pandemia.
      </Text>
      <Divider
        mt={8}
        borderBottom={"1px solid"}
        borderColor={"gray.300"}
        width={"100%"}
        opacity={"0.5"}
      />
    </>
  );
}