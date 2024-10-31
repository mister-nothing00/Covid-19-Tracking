import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Registra tutti i componenti necessari
Chart.register(...registerables);

export default function Comparazione({ date, data }) {
  if (!data) {
    return <Text>Nessun dato disponibile per il grafico.</Text>;
  }

  // Configurazione dei dati per il grafico
  const chartData = {
    labels: ["Confermati", "Decessi", "Guariti", "Attivi"],
    datasets: [
      {
        label: "Dati COVID-19",
        data: [data.confirmed, data.deaths, data.recovered, data.active],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Opzioni del grafico
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Text
        w={"full"}
        fontFamily={"Montserrat"}
        fontSize={{ base: "2xl", md: "2xl" }}
        fontWeight={"medium"}
        color={"blue.600"}
        borderLeft={"3px solid"}
        borderColor={"blue.900"}
        ps={2}
      >
        Grafico
        <Text
          ms={1}
          mb={10}
          fontFamily={"Montserrat"}
          fontSize={"sm"}
          color={"gray.400"}
          fontWeight={"semibold"}
        >
          Data : {date}
        </Text>
      </Text>
      <Box display={"block"} width={{base:"100%",md:"100%"}} mx={"auto"}>
        <Bar data={chartData} options={options} />
      </Box>
    </>
  );
}
