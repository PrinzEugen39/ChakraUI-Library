import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../component/Sidebar";

export default function RootLayout() {
  return (
    <div>
      <Grid templateColumns="repeat(6,1fr)" bg="gray.50">
        <GridItem
          as="aside"
          colSpan={{ base: 6, md: 2, xl: 1 }}
          bg="brand.900"
          minHeight={{ lg: "100vh" }}
          p={{ base: "16px", lg: "30px" }}
        >
          <Sidebar />
        </GridItem>
        <GridItem
          as="main"
          colSpan={{ base: 6, md: 4, xl: 5 }}
          minHeight="100vh"
          p="2rem"
        >
          <Navbar />
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
}
