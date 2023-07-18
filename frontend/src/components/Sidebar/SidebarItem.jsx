/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Flex, Icon } from "@chakra-ui/react";

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
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && <Icon mr="4" as={icon} />}
        {children}
      </Flex>
    </Link>
  );
};

export default SidebarItem;
