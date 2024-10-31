import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

// Registra tutti i componenti necessari
Chart.register(...registerables);

export default function ChartProvince({ covidData, date }) {

  // Controllo dei dati
  if (!covidData || covidData.length === 0) {
    return (
      <Text
        mb={20}
        width={"90%"}
        mx={"auto"}
        fontFamily={"Montserrat"}
        color={"blue.900"}
        fontStyle={"italic"}
        fontSize={"xs"}
        borderLeft={"2px solid"}
        borderColor={"blue.700"}
        ps={2}
      >
        Nessun dato disponibile per il grafico e dettagli.
      </Text>
    );
  }

  // Prendi l'ultimo report COVID-19
  const latestData = covidData[covidData.length - 1];

  // Configurazione dei dati per il grafico
  const chartData = {
    labels: ["Confermati", "Decessi", "Guariti", "Attivi"],
    datasets: [
      {
        label: "Dati COVID-19",
        data: [
          latestData.confirmed || 0,
          latestData.deaths || 0,
          latestData.recovered || 0,
          latestData.active || 0,
        ],
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
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Confronto Dati COVID-19",
      },
    },
  };

  return (
    <>
      <Text
        w={"90%"}
        fontFamily={"Montserrat"}
        fontSize={{ base: "2xl", md: "2xl" }}
        fontWeight={"medium"}
        color={"blue.700"}
        borderLeft={"3px solid"}
        borderColor={"blue.900"}
        ps={2}
        mx={"auto"}
      >
        Grafico
        <Text
          ms={1}
          mb={20}
          fontFamily={"Lora"}
          fontSize={"xs"}
          color={"gray.400"}
          fontWeight={"semibold"}
        >
          Data: {date ? date : "N/A"} 
        </Text>
      </Text>
      <Box display={"block"} width={"100%"} mx={"auto"} mb={20}>
        <Bar data={chartData} options={options} />
      </Box>
    </>
  );
}
