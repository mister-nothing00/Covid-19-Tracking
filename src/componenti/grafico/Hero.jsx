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
        Keep Track of the Pandemic with Our Interactive Charts
      </Heading>
      <Text
        color={"gray.600"}
        width={{ base: "100%", md: "80%" }}
        mt={4}
        fontFamily={"Lora"}
        fontSize={{ base: "xs", xl: "md" }}
        lineHeight={"5"}
      >
        Our innovative web app lets you monitor the evolution of Covid-19 in the
        United States in a simple and intuitive way. Simply enter the name of a
        state or county in the search field and select a date range to access
        detailed and always up-to-date graphs.
        <br />
        <br />
        In just a few clicks, you can view the trend of infections,
        hospitalizations and other key indicators in the area of ​​​​your
        interest. You will have all the information you need at your fingertips
        to understand the local epidemiological situation and make informed
        decisions to protect yourself and your loved ones.
        <br />
        <br />
        Whether you are a concerned citizen, a healthcare worker or a public
        decision-maker, our app will provide you with the data you need in a
        clear and timely way. Join the thousands of people who already rely on
        us to stay informed about the pandemic.
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
