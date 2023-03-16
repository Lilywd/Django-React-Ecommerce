import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Colors } from "../theme";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    padding: "10px 0px 10px 0px",
  },
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 0px 10px 0px",
  overflow: "hidden",
  background: Colors.black,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
     fontFamily: '"Nunito Sans", -apple-system,',
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  color: Colors.white,
  fontSize: "0.95rem",
}));