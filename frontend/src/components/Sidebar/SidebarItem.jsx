/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Flex, Icon, Text } from "@chakra-ui/react";

const SidebarItem = ({ icon, link, children, ...rest }) => {
  return (
    <Link to={link}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        cursor="pointer"
        _hover={{
          bg: "pink.300",
          color: "white",
        }}
        {...rest}
      >
        <Flex alignItems="center">
          {icon && <Icon mr={4} as={icon} />}
          <Text fontSize="md">{children}</Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default SidebarItem;
