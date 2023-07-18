import { MdNotifications } from "react-icons/md";
import {
  Button,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  Center,
  MenuDivider,
  MenuItem,
  Text,
  Icon,
} from "@chakra-ui/react";

const NotificationButton = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
        _hover={{ color: "pink.500" }}
      >
        <Icon boxSize={6} as={MdNotifications} color="black" />
      </MenuButton>

      <MenuList alignItems={"center"} borderRadius="xl">
        <MenuItem>
          <Text fontSize="sm">New Order from #52136</Text>
        </MenuItem>

        <MenuDivider />

        <MenuItem>
          <Text fontSize="sm">New Order from #52125</Text>
        </MenuItem>

        <MenuDivider />

        <MenuItem>
          <Text fontSize="sm">New Order from #52122</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NotificationButton;
