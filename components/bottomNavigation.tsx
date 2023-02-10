import {
  BottomNavigationAction,
  BottomNavigation as BottomNavigationApp,
} from "@mui/material";
import React from "react";
import RestoreIcon from "@mui/icons-material/Restore";
import { Cloud } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
export default function BottomNavigation() {
  const [value, setValue] = React.useState(1);
  return (
    <BottomNavigationApp
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        bgcolor: "black",
        "& .Mui-selected, .Mui-selected > svg": {
          color: "white !important",
        },
        "& .MuiBottomNavigationAction-root": {
          color: "gray !important",
        },
      }}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        LinkComponent={Link}
        href="quality_air"
        icon={<RestoreIcon fontSize="large" />}
      />
      <BottomNavigationAction
        LinkComponent={Link}
        href="/"
        icon={<Cloud fontSize="large" />}
      />
      <BottomNavigationAction
        LinkComponent={Link}
        href="/"
        icon={<LocationOnIcon fontSize="large" />}
      />
    </BottomNavigationApp>
  );
}
