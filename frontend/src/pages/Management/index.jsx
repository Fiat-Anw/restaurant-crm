import Content from './ManagementContent'
import { ContextProvider } from './context/ManagementContext';
import { Box, Center, Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";

const Management = () => {

  return (
    <ContextProvider>
      <Grid 
        h={"100%"}
        mt={16}
        mx={5}
        templateAreas={`
          "title"
          "main"
        `}
        gap={'4'}
      >
        <GridItem area={'title'}>
          <Text fontSize="3xl" fontWeight="extrabold" alignSelf={'flex-start'}>Stock Management</Text>
        </GridItem>
        <GridItem area={'main'}>
          <Content/>
        </GridItem>
      </Grid>
    </ContextProvider>

  );
};

export default Management;
