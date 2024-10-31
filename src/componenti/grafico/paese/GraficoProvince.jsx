import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Text,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios"; // Assicurati di importare axios
import ChartProvince from "./ChartProvince";

export default function GraficoProvince({ date, iso, region, province }) {
  const [covidData, setCovidData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCovidData = async () => {
      if (!date || !iso || !region || !province) {
        setLoading(false);
        return;
      }

      const url = `https://covid-api.com/api/reports?date=${date}&iso=${iso}&region_name=${region}&region_province=${province}`;
      try {
        const response = await axios.get(url);
        const data = response.data;

        // Assicurati che ci siano dati
        if (data && data.data) {
          setCovidData(data.data);
        } else {
          setError("Nessun dato trovato.");
        }
      } catch (error) {
        setError("Errore nel recupero dei dati: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCovidData();
  }, [date, iso, region, province]);

  return (
    <>
      <Box display={"block"} width={"100%"} mb={20}>
        <Card
          borderRadius={"12px"}
          width={{ base: "90%", md: "90%" }}
          mx={{ base: "auto", md: "auto" }}
          transition={"all 0.3s ease"}
          _hover={{
            borderRadius: "2px",
            boxShadow: "lg",
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
            {loading ? (
              <Spinner />
            ) : error ? (
              <Text color="red.500">{error}</Text>
            ) : (
              covidData.map((data, index) => (
                <Box
                  fontFamily={"Montserrat"}
                  fontSize={"md"}
                  key={index}
                  mb={4}
                >
                  <Text fontStyle={"italic"}>
                    <b>Date</b>: {data.date}
                  </Text>
                  <Text fontStyle={"italic"}>
                    <b>Confirmed</b>: {data.confirmed}
                  </Text>
                  <Text fontStyle={"italic"}>
                    <b>Deaths</b>: {data.deaths}
                  </Text>
                  <Text fontStyle={"italic"}>
                    <b>Recovered</b>: {data.recovered}
                  </Text>
                  <Text fontStyle={"italic"}>
                    <b>Active</b>: {data.active}
                  </Text>
                  <Text fontStyle={"italic"}>
                    <b>Fatality Rate</b>:{" "}
                    {(data.fatality_rate * 100).toFixed(2)}%
                  </Text>
                </Box>
              ))
            )}
          </CardBody>
        </Card>
      </Box>
      <Box width={"100%"} mx={"auto"}>
        <ChartProvince covidData={covidData} date={date} />
      </Box>
    </>
  );
}
