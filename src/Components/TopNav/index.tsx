import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { styled, Theme, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { AppContext } from "../../context";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Toolbar from "@mui/material/Toolbar";
import MuiAppBar, { AppBarProps } from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

/* Top Navigation Bar for the app */

const TopNav: React.FC = () => {
  const drawerWidth = 260;
  const theme = useTheme();
  const { isSidenavOpen, setIsSidenavOpen } = useContext(AppContext);

  const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    width: `calc(100% - 100px)`,
    ...(isSidenavOpen && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
    }),
  }));

  const handleDrawerToggle = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };
  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        theme={theme}
        sx={{
          backgroundColor: "#fff",
          borderRadius: "0.6em",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px",
        }}
      >
        <IconButton
          aria-label="open-drawer"
          onClick={handleDrawerToggle}
          edge="start"
          sx={{
            position: "absolute",
            top: 35,
            left: isSidenavOpen ? -30 : 0,
            padding: 0,
            border: "2px solid rgb(233, 235, 235)",
            borderRadius: 2,
            backgroundColor: "#fff !important",
            color: "black",
          }}
        >
          {isSidenavOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <Toolbar sx={{ px: 0, mx: 1 }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "#000", fontSize: "20px", fontWeight: 600 }}
          >
            👋 Name
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNav;
