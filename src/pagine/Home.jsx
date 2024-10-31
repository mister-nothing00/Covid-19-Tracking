import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BiInfoCircle } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Box
        width={"full"}
        mx={"auto"}
        bg={"gray.50"}
        bgGradient={"linear(190deg, gray.50,  gray.100)"}
        textAlign={{ base: "center", md: "left" }}
      >
        <Flex
          flexDir={"column"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          gap={4}
          width={"auto"}
          height={"90vh"}
          overflowY={"auto"}
          py={"60px"}
          ps={{ base: "40px", md: "60px" }}
        >
          <Heading
            fontFamily={"Montserrat"}
            fontWeight={"bold"}
            fontSize={{ base: "6xl", md: "8xl" }}
            color={"blue.900"}
            textAlign={"left"}
          >
            Dati che Fanno la Differenza
          </Heading>

          <Box
            display={"block"}
            mt={20}
            textAlign={{ base: "center", md: "left" }}
            width={"90%"}
            borderLeft={"2px solid"}
            borderColor={"blue.500"}
            ps={2}
          >
            <Heading
              fontFamily={"Montserrat"}
              fontStyle={"normal"}
              fontSize={{ base: "2xl", md: "3xl" }}
              color={"blue.700"}
              textAlign={"left"}
            >
              Chi siamo ?
            </Heading>
            <Text
              mt={4}
              fontFamily={"Lora"}
              fontStyle={"italic"}
              fontSize={{ base: "xs", md: "sm" }}
              width={{ base: "90%", md: "50%" }}
              mx={{ base: "0", md: "0" }}
              textAlign={"left"}
              letterSpacing={0.5}
              lineHeight={"5"}
              color={"gray.400"}
            >
              Minim incididunt dolor fugiat excepteur consectetur eu nisi
              cupidatat minim magna. Eu magna amet tempor qui esse. In eu nisi
              duis adipisicing mollit occaecat. Do commodo anim elit occaecat.
              Excepteur magna mollit cillum elit.
            </Text>
          </Box>
          <Box
            display={"block"}
            mt={20}
            textAlign={{ base: "center", md: "left" }}
            width={"90%"}
            borderLeft={"2px solid"}
            borderColor={"blue.500"}
            height={"auto"}
            ps={2}
          >
            <Heading
              fontFamily={"Montserrat"}
              fontStyle={"normal"}
              fontSize={{ base: "2xl", md: "3xl" }}
              color={"blue.700"}
              textAlign={"left"}
            >
              Cosa puoi fare ?
            </Heading>
            <Text
              mt={4}
              fontFamily={"Lora"}
              fontStyle={"italic"}
              fontSize={{ base: "xs", md: "sm" }}
              width={{ base: "90%", md: "50%" }}
              mx={{ base: "0", md: "0" }}
              textAlign={"left"}
              letterSpacing={0.5}
              lineHeight={"5"}
              color={"gray.400"}
            >
              Minim incididunt dolor fugiat excepteur consectetur eu nisi
              cupidatat minim magna. Eu magna amet tempor qui esse. In eu nisi
              duis adipisicing mollit occaecat. Do commodo anim elit occaecat.
              Excepteur magna mollit cillum elit.Sit proident nostrud dolor
              incididunt. Aliquip dolor nulla adipisicing sint tempor do sint.
              Magna ullamco deserunt dolor dolore officia eu aute sint eiusmod
              exercitation non duis et excepteur. Culpa sit sint non veniam
              exercitation ut. Ea veniam fugiat in tempor officia.
            </Text>
          </Box>
          <Link
            as={RouterLink}
            to={"/grafico"}
            _hover={{ textDecoration: "none" }}
          >
            <Button
              bg={"blue.800"}
              color={"whiteAlpha.800"}
              size={"auto"}
              py={2}
              px={4}
              transition={"all 0.3s ease-in-out"}
              mt={8}
              display={"flex"}
              alignItems={"center"}
              _hover={{
                color: "white",
                bg: "blue.700",
                boxShadow: "dark-lg",
                transform: "scale(1.1)",
                transition: "all 0.3s ease",
              }}
            >
              Scopri di più <BiInfoCircle />
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
}
