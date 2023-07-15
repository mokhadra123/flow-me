import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Appbar = ({ drawerWidth, openDrawer }) => {
  return (
    <AppBar
      position="static"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          onClick={openDrawer}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            display: { sm: "none" },
            mr: 1,
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, "&:hover": { fontSize: "25px" } }}
        >
          Home
        </Typography>
        <Button
          color="inherit"
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default Appbar;
