import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Box, Flex } from "@chakra-ui/react";

const RootLayout = () => {
  return (
    <>
      <Sidebar>
        <Navbar />
        <Outlet />
      </Sidebar>
    </>
  );
};

export default RootLayout;
