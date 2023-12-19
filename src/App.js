import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Routing from "./pages/routing/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routing />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
