import {
  Divider,
  Flex,
  Input,
  List,
  ListIcon,
  ListItem,
  Select,
  Text,
  Heading
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
        <Heading
          borderLeft={"4px solid"}
          borderColor={"blue.600"}
          fontFamily={"Montserrat"}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight={"bold"}
          letterSpacing={0.5}
          color={"blue.800"}
          mt={"40px"}
          mb={"20px"}
          ps={4}
        >
          Esplora i Dati per Nazione
        </Heading>
        <Text
          fontFamily={"Lora"}
          fontSize={{ base: "md", md: "lg" }}
          color={"gray.600"}
          mb={8}
          ps={4}
        >
          Segui questi semplici passaggi per accedere a grafici dettagliati sull'andamento del Covid-19 nel Paese che ti interessa:
        </Text>
        <List
          spacing={6}
          ps={4}
          mb={12}
          color={"gray.600"}
          fontFamily={"Lora"}
          fontSize={{ base: "md", md: "lg" }}
        >
          <ListItem>
            <ListIcon as={MdCheckCircle} color={"green.500"} />
            <b>Scegli la data</b> che ti interessa dal calendario per selezionare il periodo su cui vuoi indagare.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={"green.500"} />
            <b>Seleziona il Paese</b> dal menu a tendina per specificare l'area geografica di tuo interesse.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={"green.500"} />
            <b>Ottieni subito i risultati</b>: in pochi istanti, potrai visualizzare grafici chiari e sempre aggiornati sull'evoluzione della pandemia nel Paese e nel periodo che hai selezionato.
          </ListItem>
        </List>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          mx={"auto"}
          gap={8}
        >
          <Input
            type="date"
            width={"100%"}
            size={"lg"}
            borderRadius={"full"}
            onChange={(e) => setDate(e.target.value)}
          />

          <Select
            placeholder="Seleziona un Paese"
            width={"100%"}
            size={"lg"}  
            borderRadius={"full"}
            onChange={(e) => setRegion(e.target.value)}
            value={region}
          >
            <option value="CHINA">Cina</option>
            <option value="US">Stati Uniti</option>
          </Select>
        </Flex>

        <Divider
          mt={16}
          borderBottom={"2px solid"}
          borderColor={"gray.200"}
          width={"100%"}
          mx={"auto"}
        />
      </form>
      <Risultati date={date} region={region} />
    </>
  );
}