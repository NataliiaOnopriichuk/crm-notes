import { Box, CssBaseline } from "@mui/material";
import { Header } from "./Header/Header";
import { MainContent } from "./MainContent/MainContent";

export const Layout = () => {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <main>
        <MainContent />
      </main>
    </Box>
  );
};
