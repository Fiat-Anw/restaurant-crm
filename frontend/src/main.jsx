import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/noto-sans-thai";

const theme = extendTheme({
  fonts: {
    heading: `'Noto Sans Thai Variable', sans-serif`,
    body: `'Noto Sans Thai Variable', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
