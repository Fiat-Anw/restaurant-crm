/* eslint-disable react/prop-types */
import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

import SidebarContent from "./SidebarContent";
import MobileSidebar from "./MobileSidebar";

const SimpleSidebar = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh">
      <SidebarContent display={{ base: "none", md: "block" }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/* mobile */}
      <MobileSidebar display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: "300px" }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default SimpleSidebar;
