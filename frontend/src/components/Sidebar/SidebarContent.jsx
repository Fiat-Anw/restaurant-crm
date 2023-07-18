/* eslint-disable react/prop-types */
import { Box, Flex, Text, CloseButton } from "@chakra-ui/react";
import SidebarItem from "./SidebarItem";

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      borderRight="1px"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="4xl" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <SidebarItem icon={""} link="/dashboard">
        Dashboard
      </SidebarItem>
      <SidebarItem icon={""} link="/account">
        Account
      </SidebarItem>
      <SidebarItem icon={""} link="/calendar">
        Calendar
      </SidebarItem>
      <SidebarItem icon={""} link="/management">
        Management
      </SidebarItem>
    </Box>
  );
};

export default SidebarContent;
