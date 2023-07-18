import { Box, Flex, Text, Stack } from "@chakra-ui/react";
import AvatarButton from "./AvatarButton";
import NotificationButton from "./NotificationButton";

const Navbar = () => {
  return (
    <>
      <Box bg="transparent" px={4}>
        <Flex justifyContent="flex-end">
          <Flex gap={6} alignItems="center">
            <NotificationButton />

            <Flex
              gap={4}
              px={4}
              py={2}
              borderRadius="full"
              bgColor="white"
              shadow="lg"
              _hover={{ bgColor: "white" }}
            >
              <Stack gap={0}>
                <Text fontSize="sm" fontWeight="bold">
                  Dan Abrahmov
                </Text>
                <Text fontSize="xs">Admin</Text>
              </Stack>

              <AvatarButton />
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
