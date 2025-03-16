import {
  Box,
  Flex,
  Input,
  List,
  ListIcon,
  ListItem,
  Select,
  Text,
  Heading,
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
            Discover the Provincial Data
          </Heading>
          <Text
            fontFamily={"Lora"}
            fontSize={{ base: "md", md: "lg" }}
            color={"gray.600"}
            mb={8}
            ps={4}
          >
            Follow these steps to access detailed information on the progress of
            Covid-19 at the provincial level:{" "}
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
              <b>Select Country</b> from the first drop-down menu to specify the
              geographical area of ​​your interest.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color={"green.500"} />
              <b>Choose the Province</b> from the second drop-down menu to
              further narrow your search.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color={"green.500"} />
              <b>Indicate the Date</b> you are interested in to view the data
              relating to that specific period.
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
            placeholder="Select a country"
            width={{ base: "100%", md: "100%" }}
            size={"lg"}
            borderRadius={"full"}
            value={iso}
            onChange={(e) => setIso(e.target.value)}
          >
            <option value="CHN">Cina</option>
            <option value="USA">United States</option>
          </Select>

          <Select
            placeholder="Select a Province"
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
