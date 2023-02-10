import React from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import BottomNavigation from "@/components/bottomNavigation";
import AppBar from "@/components/appBar";
const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export default function LayoutApp({ children }: React.PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "100vh" }}>
        <AppBar />
        <Box
          component="main"
          sx={{ flex: 1, py: 0, px: 0, bgcolor: "#000000" }}
        >
          {children}
        </Box>
        <BottomNavigation />
      </Box>
    </ThemeProvider>
  );
}
