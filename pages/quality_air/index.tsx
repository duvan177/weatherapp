import { Box } from "@mui/material";
import { Container } from "@mui/system";

export default function QualityAir() {
  return (
    <Container
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        alignContent: "center",
        height: "85vh",
      }}
      maxWidth={"lg"}
    >
      <Box sx={{ flexGrow: 1 }}>
        <span style={{color:'white'}}>calidad del aire ya es fast</span>
      </Box>
    </Container>
  );
}
