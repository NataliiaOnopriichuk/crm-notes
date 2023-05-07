import { Box, CssBaseline } from "@mui/material";
import { Header } from "./Header/Header";
import { ListItemBar } from "../ListItem/ListItem";

export const Layout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <main>
        <ListItemBar />
      </main>
    </Box>
  );
};
