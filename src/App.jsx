import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Sidebar from "./componenti/sidebar/Sidebar";
import Home from "./pagine/Home";
import Grafico from "./pagine/Grafico";

function App() {
  return (
    <>
      
      <Box display={"flex"} width={"full"} >
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/grafico" element={<Grafico/>} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
