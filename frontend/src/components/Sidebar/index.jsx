/* eslint-disable react/prop-types */
import { Box, Drawer, DrawerContent } from "@chakra-ui/react";

import SidebarContent from "./SidebarContent";
import MobileSidebar from "./MobileSidebar";

const SimpleSidebar = ({ children }) => {
  return (
    <Box minH="100vh">
      <SidebarContent display={{ base: "none", md: "block" }} />
      <Drawer placement="left" size="full">
        <DrawerContent>
          <SidebarContent />
        </DrawerContent>
      </Drawer>

      {/* mobile */}
      <MobileSidebar display={{ base: "flex", md: "none" }} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default SimpleSidebar;
