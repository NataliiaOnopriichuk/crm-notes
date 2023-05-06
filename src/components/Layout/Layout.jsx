import { Box, CssBaseline, Drawer } from "@mui/material";
import { Header } from "./Header/Header";
import { ListItemBar } from "../ListItem/ListItem";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    overflowY: "scroll",
  },
}));

export const Layout = () => {
  const classes = useStyles();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <main>
        <Drawer
          className={classes.drawerContent}
          variant="permanent"
          sx={{
            width: 240,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: 240,
              boxSizing: "border-box",
            },
          }}
        >
          <ListItemBar />
        </Drawer>
      </main>
    </Box>
  );
};
