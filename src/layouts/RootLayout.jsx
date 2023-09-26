import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";

export default function RootLayout() {
  return (
    <div>
      <Grid templateColumns="repeat(6,1fr)" bg="gray.50">
        <GridItem as="aside" colSpan="1" bg="linkedin.200" minHeight="100hv" p="1.8rem">
          <span>sidebar</span>
        </GridItem>
        <GridItem as="main" colSpan="5" minHeight="100hv" p="2rem">
          <Navbar />
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
}
