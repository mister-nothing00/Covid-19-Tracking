import {
  Divider,
  Flex,
  Input,
  List,
  ListIcon,
  ListItem,
  Select,
  Text,
  Heading,
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
          Explore Data by Country
        </Heading>
        <Text
          fontFamily={"Lora"}
          fontSize={{ base: "md", md: "lg" }}
          color={"gray.600"}
          mb={8}
          ps={4}
        >
          Follow these simple steps to access detailed graphs on the progress of
          Covid-19 in the country you are interested in:{" "}
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
            <b>Choose the date</b> you are interested in from the calendar to
            select the period you want to investigate.{" "}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={"green.500"} />
            <b>Select Country</b> from the drop-down menu to specify the
            geographic area of ​​your interest.{" "}
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color={"green.500"} />
            <b>Get results right away</b>: in just a few moments, you will be
            able to view clear and constantly updated graphs on the evolution of
            the pandemic in the country and in the period you have selected.{" "}
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
            placeholder="Select a country"
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
