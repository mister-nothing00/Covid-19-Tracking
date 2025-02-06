import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
const App = lazy(() => import("./App.jsx"));
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              Caricamento ...
            </div>
          }
        >
          <App />
        </Suspense>
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
