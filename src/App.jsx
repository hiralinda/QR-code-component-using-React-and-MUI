import React from "react";
import QrCode from "./assets/qr-code.png";
import { Stack, Typography } from "@mui/material";
import "./App.css";

const App = () => {
  return (
    <Stack
      minHeight={"95vh"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor="hsl(212, 45%, 89%)">
      <Stack
        bgcolor="hsl(0, 0%, 100%)"
        gap={"20px"}
        p={2}
        borderRadius={"15px"}
        sx={{ width: { lg: "260px", xs: "280px" } }}
        boxShadow={
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
        }>
        <img src={QrCode} alt={QrCode} style={{ borderRadius: "10px" }} />

        <Stack py={1}>
          <Typography
            variant="h6"
            color="hsl(218, 44%, 22%)"
            fontWeight="700"
            textAlign={"center"}
            fontFamily={"Outfit"}
            lineHeight={"1.5"}>
            Improve your front-end skills by building projects
          </Typography>
          <Typography
            fontSize={"15px"}
            fontFamily={"Outfit"}
            color="hsl(216, 15%, 48%)"
            fontWeight="400"
            lineHeight={"1.5"}
            textAlign={"center"}
            mt={1}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default App;
