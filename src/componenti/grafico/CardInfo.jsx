import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Text,
  Spinner,
  Alert,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Comparazione from "./Comparazione";

export default function CardInfo({ date, region }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://covid-api.com/api/reports?date=${date}&region_name=${region}`
        );
        setData(response.data.data[0]);
        console.log(setData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (date && region) {
      fetchData();
    }
  }, [date, region]);

  if (loading) {
    return (
      <Box display={"block"} width={"100%"}>
        <Card
          borderRadius={"16px"}
          width={{ base: "90%", md: "90%" }}
          mx={{ base: "auto", md: "auto" }}
          my={20}
        >
          <CardBody textAlign={"center"}>
            <Spinner />
          </CardBody>
        </Card>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display={"block"} width={"100%"}>
        <Card
          borderRadius={"16px"}
          width={{ base: "90%", md: "50%" }}
          mx={{ base: "auto", md: "auto" }}
        >
          <CardBody textAlign={"center"}>
            <Alert status="error">Errore nel caricamento dei dati.</Alert>
          </CardBody>
        </Card>
      </Box>
    );
  }

  if (!data) {
    return (
      <Box display={"block"} width={"100%"}>
        <Card
          borderRadius={"16px"}
          width={{ base: "90%", md: "50%" }}
          mx={{ base: "auto", md: "auto" }}
          boxShadow={"md"}
        >
          <CardBody textAlign={"center"}>
            <Text fontFamily={"Montserrat"} color={"gray.400"}>
              Nessun dato disponibile per la data selezionata.
            </Text>
          </CardBody>
        </Card>
      </Box>
    );
  }

  return (
    <>
      <Box display={"block"} width={"100%"} mb={"100px"}>
        <Card
          borderRadius={"10px"}
          width={{ base: "100%", md: "90%" }}
          mx={{ base: "auto", md: "auto" }}
          transition={"all 0.3s ease"}
          _hover={{
            borderRadius: "2px",
            boxShadow: "md",
            transform: "scale(1.1)",
            transition: "transform 0.3s ease",
          }}
        >
          <CardHeader
            fontFamily={"Montserrat"}
            fontSize={{ base: "3xl", md: "4xl" }}
            textAlign={"left"}
            fontWeight={"semibold"}
            color={"blue.600"}
          >
            Dettagli COVID-19
          </CardHeader>
          <Divider
            mb={4}
            opacity={0.2}
            boxShadow={"lg"}
            borderBottom={"1px solid"}
            borderColor={"gray.400"}
            width={"100%"}
          />
          <CardBody textAlign={"left"} fontFamily={"Lora"} color={"gray.500"}>
            <Text fontStyle={"italic"}>
              <strong>Data:</strong> {data.date}
            </Text>
            <Text fontStyle={"italic"}>
              <strong>Confermati:</strong> {data.confirmed}
            </Text>
            <Text fontStyle={"italic"}>
              <strong>Decessi:</strong> {data.deaths}
            </Text>
            <Text fontStyle={"italic"}>
              <strong>Guariti:</strong> {data.recovered}
            </Text>
            <Text fontStyle={"italic"}>
              <strong>Attivi:</strong> {data.active}
            </Text>
            <Text fontStyle={"italic"}>
              <strong>Fattore di mortalità:</strong>{" "}
              {(data.fatality_rate * 100).toFixed(2)}%
            </Text>
            <Text fontStyle={"italic"}>
              <strong>Ultimo aggiornamento:</strong> {data.last_update}
            </Text>
          </CardBody>
        </Card>
      </Box>
      <Box width={"100%"} mx={"auto"}>
        <Comparazione date={date} region={region} data={data} />
      </Box>
    </>
  );
}
