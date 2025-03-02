import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { BiLineChart } from "react-icons/bi";
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
            Scopri l'Andamento del Covid con i Nostri Grafici Interattivi
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
              La Nostra Missione
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
              In un periodo di incertezza, la conoscenza è potere. Siamo qui per fornirti dati chiari e affidabili sull'andamento della pandemia di Covid-19. La nostra web app ti permette di visualizzare grafici interattivi sempre aggiornati, per comprendere meglio l'evoluzione del virus nel tempo.
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
              Esplora i Dati in Modo Semplice
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
              Con pochi click, potrai accedere a una vasta gamma di grafici interattivi che mostrano l'andamento dei contagi, dei ricoveri e delle vaccinazioni. Puoi filtrare i dati per regione, fascia d'età e periodo temporale. La nostra interfaccia intuitiva ti permetterà di trovare rapidamente le informazioni che cerchi, per essere sempre aggiornato sull'evoluzione della pandemia.
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
              Esplora i Grafici <BiLineChart />
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
}