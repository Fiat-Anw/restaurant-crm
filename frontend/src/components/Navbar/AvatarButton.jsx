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
} from "@chakra-ui/react";

const AvatarButton = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar
          boxSize={10}
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
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

export default AvatarButton;
