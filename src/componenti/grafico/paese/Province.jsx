import {
  Box,
  Flex,
  Input,
  List,
  ListIcon,
  ListItem,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Info from "./Info";
import { MdCheckCircle } from "react-icons/md";

export default function Province() {
  const [iso, setIso] = useState("");
  const [region, setRegion] = useState("");
  const [province, setProvince] = useState("");
  const [date, setDate] = useState("");
  const [provinceList, setProvinceList] = useState([]);

  // Funzione per recuperare le province
  const fetchProvinces = async (region) => {
    try {
      const response = await fetch(
        `https://covid-api.com/api/provinces/${region}?per_page=52`
      );
      const data = await response.json();
      setProvinceList(data.data);
    } catch (error) {
      console.error("Errore nel recupero delle province:", error);
    }
  };

  // Effetto per chiamare l'API quando la regione cambia
  useEffect(() => {
    if (iso) {
      fetchProvinces(iso);
    } else {
      setProvinceList([]);
    }
  }, [iso]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Box
          display="flex"
          flexDir={"column"}
          alignItems={"flex-start"}
          mt={16}
        >
          <Text
            borderLeft={"3px solid"}
            borderColor={"blue.900"}
            fontFamily={"Montserrat"}
            fontSize={"2xl"}
            fontWeight={"medium"}
            letterSpacing={0.5}
            color={"blue.700"}
            ps={2}
            ms={2}
          >
            Cerca per provincia
          </Text>
          <Text
            fontFamily={"Lora"}
            fontStyle={"italic"}
            fontSize={{ base: "xs", md: "sm" }}
            color={"gray.400"}
            my={5}
            ms={6}
          >
            <List
              display={"flex"}
              flexDir={"column"}
              alignItems={"flex-start"}
              gap={4}
              lineHeight={"4"}
            >
              <ListItem lineHeight={"5"}>
                <ListIcon as={MdCheckCircle} />
                <b>Primo e Secondo Campo </b>: Questi due campi permettono all'utente di
                selezionare un continente. Entrambi i campi devono riportare lo
                stesso continente per assicurare una selezione coerente.
              </ListItem>
              <ListItem lineHeight={"5"}>
                <ListIcon as={MdCheckCircle} />
                <b>Terzo Campo </b>: Una volta scelto il continente, l’utente può
                selezionare una provincia specifica all'interno di uno stato o
                di una nazione del continente scelto. Questo passaggio permette
                di focalizzare ulteriormente la ricerca.
              </ListItem>
              <ListItem lineHeight={"5"}>
                <ListIcon as={MdCheckCircle} />
                <b>Data </b>: Infine, l’utente può selezionare una data per filtrare le
                informazioni basate sul periodo desiderato.
              </ListItem>
            </List>
          </Text>
        </Box>

        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"90%"}
          mx={"auto"}
          gap={8}
          my={16}
        >
          <Select
            placeholder="Seleziona un'opzione"
            width={{ base: "100%", md: " 100%" }}
            size={"sm"}
            borderRadius={"16px"}
            value={iso}
            onChange={(e) => setIso(e.target.value)}
          >
            <option value="CHN">CHN</option>
            <option value="USA">USA</option>
          </Select>
          <Select
            placeholder="Seleziona un'opzione"
            width={{ base: "100%", md: " 100%" }}
            size={"sm"}
            borderRadius={"16px"}
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="CHINA">CHINA</option>
            <option value="US">US</option>
          </Select>

          <Select
            placeholder="Seleziona una provincia"
            width={"100%"}
            size={"sm"}
            borderRadius={"16px"}
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          >
            {provinceList.map((prov, index) => (
              <option key={index} value={prov.province}>
                {prov.province}
              </option>
            ))}
          </Select>

          <Input
            type="date"
            width={"100%"}
            size={"sm"}
            borderRadius={"16px"}
            onChange={(e) => setDate(e.target.value)}
          />
        </Flex>
      </form>
      <Info date={date} iso={iso} region={region} province={province} />
    </>
  );
}
