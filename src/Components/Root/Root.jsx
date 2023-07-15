import { Outlet } from "react-router-dom";

import Appbar from "../AppBar/App-bar";
import LeftDrawer from "../Drawer/Drawer";
import { useState } from "react";
import { Box } from "@mui/material";
const drawerWidth = 240;
const Root = () => {
  const [showDrawer, setShowDrawer] = useState("none");
  const [drawerType, setDrawerType] = useState("permanent");

  const openDrawer = () => {
    setShowDrawer("block");
    setDrawerType("temporary");
  };
  const closeDrawer = () => {
    setShowDrawer("none");
    setDrawerType("permanent");
  };

  return (
    <div>
      <Appbar openDrawer={openDrawer} drawerWidth={drawerWidth} />

      <LeftDrawer
        closeDrawer={closeDrawer}
        drawerType={drawerType}
        showDrawer={showDrawer}
        drawerWidth={drawerWidth}
      />
      <Box
        sx={{
          ml: { xs: 0, sm: `${drawerWidth}px` },
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
};

export default Root;
