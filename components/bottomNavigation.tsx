import {
  BottomNavigationAction,
  BottomNavigation as BottomNavigationApp,
} from "@mui/material";
import React from "react";
import { Cloud , AirOutlined, CalendarMonth } from "@mui/icons-material";
import Link from "next/link";
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
        icon={<AirOutlined fontSize="large" />}
      />
      <BottomNavigationAction
        LinkComponent={Link}
        href="/"
        icon={<Cloud fontSize="large" />}
      />
      <BottomNavigationAction
        LinkComponent={Link}
        href="/"
        icon={<CalendarMonth fontSize="large" />}
      />
    </BottomNavigationApp>
  );
}
