import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { BiLineChart } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  
  const headingSize = useBreakpointValue({
    base: "4xl",
    sm: "5xl",
    md: "6xl",
    lg: "7xl",
    xl: "8xl",
  });

  const subheadingSize = useBreakpointValue({
    base: "xl",
    sm: "2xl",
    md: "3xl",
  });

  const paragraphSize = useBreakpointValue({
    base: "xs",
    sm: "sm",
    md: "md",
  });

  const paragraphWidth = useBreakpointValue({
    base: "95%",
    sm: "90%",
    md: "70%",
    lg: "50%",
  });

  const buttonSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
  });

  const sidePadding = useBreakpointValue({
    base: "20px",
    sm: "30px",
    md: "60px",
    lg: "80px",
  });

  return (
    <>
      <Box
        width="100%"
        height="100vh"
        maxHeight="100vh"
        mx="auto"
        bg="gray.50"
        bgGradient="linear(190deg, gray.50, gray.100)"
      >
        <Flex
          flexDir="column"
          justifyContent="flex-start"
          alignItems={{ base: "center", md: "flex-start" }}
          gap={{ base: 6, md: 8, lg: 10 }}
          width="100%"
          height="90vh"
          overflowY="auto"
          py={{ base: "40px", md: "60px" }}
          px={sidePadding}
        >
          <Heading
            fontFamily="Montserrat"
            fontWeight="bold"
            fontSize={headingSize}
            color="blue.900"
            textAlign={{ base: "center", md: "left" }}
            lineHeight="1.2"
            maxWidth={{ base: "100%", lg: "90%" }}
          >
            Discover the Trend of Covid with Our Interactive Graphs
          </Heading>

          <Box
            display="block"
            mt={{ base: 10, md: 16, lg: 20 }}
            width="100%"
            borderLeft={{ base: "none", sm: "2px solid" }}
            borderColor="blue.500"
            ps={{ base: 0, sm: 4 }}
            borderTop={{ base: "2px solid", sm: "none" }}
            borderTopColor="blue.500"
            pt={{ base: 4, sm: 0 }}
          >
            <Heading
              fontFamily="Montserrat"
              fontStyle="normal"
              fontSize={subheadingSize}
              color="blue.700"
              textAlign={{ base: "center", sm: "left" }}
              mb={{ base: 3, md: 4 }}
            >
              Our Mission
            </Heading>
            <Text
              fontFamily="Lora"
              fontStyle="italic"
              fontSize={paragraphSize}
              width={paragraphWidth}
              mx={{ base: "auto", sm: "0" }}
              textAlign={{ base: "center", sm: "left" }}
              letterSpacing="0.5px"
              lineHeight={{ base: "1.6", md: "1.8" }}
              color="gray.500"
            >
              In times of uncertainty, knowledge is power. We are here to
              provide you with clear and reliable data on the progress of the
              Covid-19 pandemic. Our web app allows you to view interactive
              graphs that are always up to date, to better understand the
              evolution of the virus over time.{" "}
            </Text>
          </Box>

          <Box
            display="block"
            mt={{ base: 10, md: 16, lg: 20 }}
            width="100%"
            borderLeft={{ base: "none", sm: "2px solid" }}
            borderColor="blue.500"
            ps={{ base: 0, sm: 4 }}
            borderTop={{ base: "2px solid", sm: "none" }}
            borderTopColor="blue.500"
            pt={{ base: 4, sm: 0 }}
          >
            <Heading
              fontFamily="Montserrat"
              fontStyle="normal"
              fontSize={subheadingSize}
              color="blue.700"
              textAlign={{ base: "center", sm: "left" }}
              mb={{ base: 3, md: 4 }}
            >
              Explore Data Easily
            </Heading>
            <Text
              fontFamily="Lora"
              fontStyle="italic"
              fontSize={paragraphSize}
              width={paragraphWidth}
              mx={{ base: "auto", sm: "0" }}
              textAlign={{ base: "center", sm: "left" }}
              letterSpacing="0.5px"
              lineHeight={{ base: "1.6", md: "1.8" }}
              color="gray.500"
            >
              With just a few clicks, you can access a wide range of interactive
              graphs that show the trend of infections, hospitalizations and
              vaccinations. You can filter the data by region, age group and
              time period. Our intuitive interface will allow you to quickly
              find the information you are looking for, to always be updated on
              the evolution of the pandemic.
            </Text>
          </Box>

          <Link
            as={RouterLink}
            to="/grafico"
            _hover={{ textDecoration: "none" }}
            alignSelf={{ base: "center", md: "flex-start" }}
            mt={{ base: 6, md: 8 }}
          >
            <Button
              bg="blue.800"
              color="whiteAlpha.900"
              size={buttonSize}
              py={{ base: 2, md: 3 }}
              px={{ base: 4, md: 6 }}
              transition="all 0.3s ease-in-out"
              display="flex"
              alignItems="center"
              gap={2}
              _hover={{
                color: "white",
                bg: "blue.700",
                boxShadow: "xl",
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              }}
              borderRadius="full"
            >
              Explore the Charts <BiLineChart />
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
}
