import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import MuiDrawer from "@mui/material/Drawer";
import ListItemIcon from "@mui/material/ListItemIcon";
import { styled, Theme, CSSObject, useTheme } from "@mui/material/styles";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import RecommendIcon from "@mui/icons-material/Recommend";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Typography from "@mui/material/Typography";
import ImageListItem from "@mui/material/ImageListItem";
import WeekDayLogo1 from "../../assets/weekday_logo1.png";
import WeekDayLogo2 from "../../assets/weekday_logo2.png";
import { useContext } from "react";
import { AppContext } from "../../context";
import Box from "@mui/material/Box";

/* Side Navigation Bar - Provides a collapsable menu for easy access to different sections */

const SideNav: React.FC = () => {
  const { isSidenavOpen, drawerWidth } = useContext(AppContext);

  const openedMixin = () => ({
    width: drawerWidth,
    overflowX: "hidden",
  });

  const closedMixin = () => ({
    width: "100px",
    overflowX: "hidden",
  });

  const Drawer = styled(MuiDrawer)(() => ({
    width: drawerWidth,
    flexShrink: 0,
    justifyContent: "center",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(isSidenavOpen && {
      ...openedMixin(),
      "& .MuiDrawer-paper": openedMixin(),
    }),
    ...(!isSidenavOpen && {
      ...closedMixin(),
      "& .MuiDrawer-paper": closedMixin(),
    }),
  }));

  return (
    <Drawer
      variant="permanent"
      sx={{
        backgroundColor: "#fff",
        borderRadius: "0.6em",
        position: "fixed",
      }}
    >
      <ImageListItem sx={{ my: 2.5 }}>
        <Box
          sx={{
            height: 50,
            display: "flex",
            justifyContent: isSidenavOpen ? "flex-start" : "center",
          }}
        >
          <img
            src={isSidenavOpen ? WeekDayLogo1 : WeekDayLogo2}
            style={{
              width: isSidenavOpen ? 150 : 50,
              paddingLeft: isSidenavOpen ? 16 : 0,
              objectFit: "contain",
            }}
          />
        </Box>
      </ImageListItem>

      <Divider sx={{ width: "80%", margin: "0 auto" }} />

      <List sx={{ p: 1 }}>
        <Typography
          variant="body1"
          component="div"
          noWrap
          sx={{
            color: "rgb(117, 117, 117)",
            fontSize: 10,
            my: 1,
            mx: 2,
            mt: 2,
            textAlign: isSidenavOpen ? "left" : "center",
          }}
        >
          {isSidenavOpen ? "LOOKING FOR A JOB" : "GET JOBS"}
        </Typography>
        {[
          "My applied jobs",
          "Search jobs",
          "Search salary",
          "Ask for referral",
        ].map((text, index) => {
          const icons = [
            <PersonOutlineIcon sx={{ color: "#000" }} />,
            <SearchIcon sx={{ color: "#000" }} />,
            <CurrencyRupeeIcon sx={{ color: "#000" }} />,
            <PersonAddAltIcon sx={{ color: "#000" }} />,
          ];
          return (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isSidenavOpen ? "flex-start" : "center",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isSidenavOpen ? 2 : 0,
                    justifyContent: "center",
                  }}
                >
                  {icons[index]}
                </ListItemIcon>
                <ListItemIcon
                  sx={{
                    display: isSidenavOpen ? "block" : "none",
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgb(117, 117, 117);",
                      fontWeight: "400",
                      fontSize: "12px",
                    }}
                  >
                    {text}
                  </Typography>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ width: "80%", margin: "0 auto" }} />

      <List sx={{ p: 1 }}>
        <Typography
          variant="body1"
          component="div"
          noWrap
          sx={{
            color: "rgb(117, 117, 117)",
            fontSize: 10,
            my: 1,
            mx: 2,
            mt: 2,
            textAlign: isSidenavOpen ? "left" : "center",
          }}
        >
          {isSidenavOpen ? "RECOMMEND AND EARN" : "REFER"}
        </Typography>
        {["Recommend from shortlist", "Refer this extension"].map(
          (text, index) => {
            const icons = [
              <RecommendIcon sx={{ color: "#000" }} />,
              <ShareOutlinedIcon sx={{ color: "#000" }} />,
            ];
            return (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: isSidenavOpen ? "flex-start" : "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isSidenavOpen ? 2 : 0,
                      justifyContent: "center",
                    }}
                  >
                    {icons[index]}
                  </ListItemIcon>
                  <ListItemIcon
                    sx={{
                      display: isSidenavOpen ? "block" : "none",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgb(117, 117, 117);",
                        fontWeight: "400",
                        fontSize: "12px",
                      }}
                    >
                      {text}
                    </Typography>
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            );
          }
        )}
      </List>
    </Drawer>
  );
};

export default SideNav;
