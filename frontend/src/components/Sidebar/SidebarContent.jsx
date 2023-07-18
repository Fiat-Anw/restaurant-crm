/* eslint-disable react/prop-types */
import { Box, Flex, Text, CloseButton } from "@chakra-ui/react";
import SidebarItem from "./SidebarItem";
import { AiFillHome, AiFillCalendar } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { BsFillFileBarGraphFill } from "react-icons/bs";

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      w={{ base: "full", md: "260px" }}
      borderRadius="3xl"
      pos="fixed"
      left={{ base: "0", md: "20px" }}
      top={{ base: "0", md: "2.5%" }}
      h={{ base: "100%", md: "95%" }}
      bg="white"
      shadow="lg"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx={8}
        mt={4}
        mb={12}
        justifyContent="space-between"
      >
        <Text fontSize="3xl" fontWeight="extrabold">
          TableTrack
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>

      <Flex direction="column" gap={2}>
        <SidebarItem icon={AiFillHome} link="/dashboard">
          Dashboard
        </SidebarItem>
        <SidebarItem icon={BiSolidUser} link="/account">
          Account
        </SidebarItem>
        <SidebarItem icon={AiFillCalendar} link="/calendar">
          Calendar
        </SidebarItem>
        <SidebarItem icon={BsFillFileBarGraphFill} link="/management">
          Management
        </SidebarItem>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
