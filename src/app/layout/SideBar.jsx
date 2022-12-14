import React from "react";
import { Box, Link, Paper, Tooltip, Divider } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { VscFiles, VscSettingsGear } from "react-icons/vsc";
import { BiGitBranch } from "react-icons/bi";
import { links } from "../pages/Links";

const SideBar = ({ darkMode }) => {
  const boxSx = {
    flexGrow: 0,
    my: 1.5,
    color: "#888888",
    fontSize: 24,
    outline: "none",
    "&:hover": {
      color: "white",
    },
    display: "flex",
    justifyContent: "center",
  };

  return (
    <Box
      sx={{
        height: `calc(100vh - 20px)`,
        backgroundColor: darkMode ? "#333333" : "#2c2c2c",
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "column",
      }}
      component={Paper}
      square
      elevation={0}
    >
      <Box
        sx={{
          flexGrow: 0,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={boxSx}>
          <VscFiles />
        </Box>

        <Tooltip title="Github Link" arrow placement="right">
          <Link target="_blank" href="#" underline="none" color="inherit">
            <Box sx={boxSx}>
              <BiGitBranch />
            </Box>
          </Link>
        </Tooltip>
        <Divider sx={{ m: 0.5 }} />

        {links.map((data) => (
          <Tooltip title={data.title} arrow placement="right" key={data.index}>
            <Link
              target="_blank"
              href={data.href}
              underline="none"
              color="inherit"
            >
              <Box sx={boxSx}>{data.icon}</Box>
            </Link>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default SideBar;
