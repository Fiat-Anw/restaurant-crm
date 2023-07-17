import { Text } from "@chakra-ui/react";

import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <>
          <Text fontWeight="bold" bgColor="red.500" color="white" h={24}>
            This is just a Layout Example. Change path in url to test route. Or
            Feel free to delete all of this.
          </Text>
          <Outlet />
        </>
      }
    >
      <Route path="/" element={<Text>default route in /</Text>} />
      <Route path="/111" element={<Text>You are in /111</Text>} />
      <Route path="/222" element={<Text>You are in /222</Text>} />
      <Route path="/333" element={<Text>You are in /333</Text>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
