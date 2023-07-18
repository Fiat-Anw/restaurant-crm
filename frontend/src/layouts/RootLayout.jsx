import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Sidebar>
        <Navbar />
        <Outlet />
      </Sidebar>
    </>
  );
};

export default RootLayout;
