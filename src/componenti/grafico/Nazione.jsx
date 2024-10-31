import {
  Divider,
  Flex,
  Input,
  List,
  ListIcon,
  ListItem,
  Select,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Risultati from "./Risultati";
import { MdCheckCircle } from "react-icons/md";

export default function Nazione({ onFormSubmit }) {
  const [region, setRegion] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onFormSubmit) {
      onFormSubmit({ date, value });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Text
          borderLeft={"3px solid"}
          borderColor={"blue.900"}
          fontFamily={"Montserrat"}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight={"medium"}
          letterSpacing={0.5}
          color={"blue.700"}
          mt={"40px"}
          mb={"20px"}
          ps={1}
          ms={0}
        >
          Cerca per nazione
        </Text>
        <Text
          fontFamily={"Lora"}
          fontStyle={"italic"}
          fontSize={{ base: "xs", md: "sm" }}
          color={"gray.400"}
          ms={1}
        >
          <List
            display={"flex"}
            flexDir={"column"}
            alignItems={"flex-start"}
            gap={4}
            ps={2}
            lineHeight={"4"}
          >
            <ListItem lineHeight={"5"}>
              <ListIcon as={MdCheckCircle} color={"blue.600"} />
              <b>Inserisci</b> una data nel primo campo: scegli il giorno, il
              mese e l’anno per il periodo di cui vuoi visualizzare i dati.
            </ListItem>
            <ListItem lineHeight={"5"}>
              <ListIcon as={MdCheckCircle} color={"blue.600"} />
              <b>Seleziona</b> un’opzione dal secondo campo: scegli tra le
              opzioni disponibili per specificare ulteriormente il tipo di dati
              da visualizzare.
            </ListItem>
            <ListItem lineHeight={"5"}>
              <ListIcon as={MdCheckCircle} color={"blue.600"} />
              <b>Visualizza</b> i risultati: una volta selezionata la data e
              l’opzione, verranno mostrati i dati aggiornati e pertinenti a quel
              periodo e all’opzione selezionata, così potrai monitorare
              l’andamento specifico in base alle tue preferenze di ricerca.
            </ListItem>
          </List>
        </Text>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          mx={"auto"}
          gap={8}
          mt={16}
        >
          <Input
            type="date"
            width={"100%"}
            size={"sm"}
            borderRadius={"16px"}
            onChange={(e) => setDate(e.target.value)}
          />

          <Select
            placeholder="Seleziona un opzione"
            width={"100%"}
            size={"sm"}
            borderRadius={"16px"}
            onChange={(e) => setRegion(e.target.value)}
            value={region}
          >
            <option value="CHINA">CHN</option>
            <option value="US">USA</option>
          </Select>
        </Flex>

        <Divider
          mt={10}
          borderBottom={"2px solid"}
          borderColor={"gray.400 "}
          width={"100%"}
          mx={"auto"}
          opacity={"0.1"}
        />
      </form>
      {/* Passaggio delle props: date & region */}
      <Risultati date={date} region={region} />
    </>
  );
}
