/* eslint-disable react/prop-types */
import { Flex, IconButton, Text } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";

const MobileSidebar = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="14"
      alignItems="center"
      shadow="md"
      bgColor="white"
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="ghost"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontWeight="bold" mx="auto">
        TableTrack
      </Text>
    </Flex>
  );
};

export default MobileSidebar;
