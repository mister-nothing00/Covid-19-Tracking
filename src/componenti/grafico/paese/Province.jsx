import {
  Box,
  Flex,
  Input,
  List,
  ListIcon,
  ListItem,
  Select,
  Text,
  Heading
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
  const fetchProvinces = async (iso) => {
    try {
      const response = await fetch(
        `https://covid-api.com/api/provinces/${iso}?per_page=52`
      );
      const data = await response.json();
      setProvinceList(data.data);
    } catch (error) {
      console.error("Errore nel recupero delle province:", error);
    }
  };

  // Effetto per chiamare l'API quando l'ISO cambia
  useEffect(() => {
    if (iso) {
      fetchProvinces(iso);
      setRegion(iso === "CHN" ? "CHINA" : "US");
    } else {
      setProvinceList([]);
      setRegion("");
    }
  }, [iso]);

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <Box mt={16}>
          <Heading
            borderLeft={"4px solid"}
            borderColor={"blue.600"}
            fontFamily={"Montserrat"}
            fontSize={"2xl"}
            fontWeight={"bold"}
            color={"blue.800"}
            ps={4}
            mb={6}
          >
            Scopri i Dati Provinciali
          </Heading>
          <Text
            fontFamily={"Lora"}
            fontSize={{ base: "md", md: "lg" }}
            color={"gray.600"}
            mb={8}
            ps={4}
          >
            Segui questi passaggi per accedere a informazioni dettagliate sull'andamento del Covid-19 a livello provinciale:
          </Text>
          <List spacing={6} ps={4} mb={12} color={"gray.600"} fontFamily={"Lora"} fontSize={{ base: "md", md: "lg" }}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color={"green.500"} />
              <b>Seleziona il Paese</b> dal primo menu a tendina per specificare l'area geografica di tuo interesse.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color={"green.500"} />
              <b>Scegli la Provincia</b> dal secondo menu a tendina per restringere ulteriormente la tua ricerca.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color={"green.500"} />
              <b>Indica la Data</b> che ti interessa per visualizzare i dati relativi a quel periodo specifico.
            </ListItem>
          </List>
        </Box>

        <Flex
          flexDir={{ base: "column", md: "row" }}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          mx={"auto"}
          gap={8}
        >
          <Select
            placeholder="Seleziona un Paese"
            width={{ base: "100%", md: "100%" }}
            size={"lg"}
            borderRadius={"full"}
            value={iso}
            onChange={(e) => setIso(e.target.value)}
          >
            <option value="CHN">Cina</option>
            <option value="USA">Stati Uniti</option>
          </Select>

          <Select
            placeholder="Seleziona una Provincia"
            width={"100%"}
            size={"lg"}
            borderRadius={"full"}
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            isDisabled={!provinceList.length}
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
            size={"lg"}
            borderRadius={"full"}
            onChange={(e) => setDate(e.target.value)}
          />
        </Flex>
      </form>
      <Info date={date} iso={iso} region={region} province={province} />
    </>
  );
}