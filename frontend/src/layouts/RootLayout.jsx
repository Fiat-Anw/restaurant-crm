import { Outlet } from "react-router-dom";
import { Text } from "@chakra-ui/react";

const RootLayout = () => {
  return (
    <div>
      <Text>Root layout</Text>
      <Outlet />
    </div>
  );
};

export default RootLayout;
