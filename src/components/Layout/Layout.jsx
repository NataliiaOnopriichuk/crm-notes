import { Box, CssBaseline } from "@mui/material";
import { Header } from "./Header/Header";

export const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <main>ppp</main>
    </Box>
  );
};
