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
        <br />
        <Center>
          <Avatar
            size="2xl"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
          />
        </Center>
        <br />
        <Center>
          <Text fontSize="xl" fontWeight="bold">
            Dan Abromov
          </Text>
        </Center>
        <br />

        <MenuDivider />

        <MenuItem>
          <Text fontSize="sm">Account Settings</Text>
        </MenuItem>
        <MenuItem>
          <Text fontSize="sm">Logout</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NotificationButton;
