import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  drawerContent: {
    overflowY: "scroll",
    width: 240,
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: 240,
      boxSizing: "border-box",
    },
  },
}));

export const MyStyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  fontWeight: theme.typography.fontWeightBold,
}));

export const MyStyledText = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  fontWeight: theme.typography.caption,
  fontSize: "12px",
}));

export const MyStyledItemButton = styled(ListItemButton)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  borderBottom: "1px solid #dedede",
}));

export const ListItemBar = () => {
  const classes = useStyles();
  const today = new Date();
  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <Drawer className={classes.drawerContent} variant="permanent">
      <Box sx={{ overflow: "auto", paddingTop: "90px" }}>
        <List>
          {[
            "Inbox",
            "Starred",
            "Send email",
            "Drafts",
            "Inbox",
            "Starred",
            "Send email",
            "Drafts",
          ].map((text, index) => (
            <ListItem key={text}>
              <MyStyledItemButton>
                <MyStyledTypography>{text}</MyStyledTypography>
                <MyStyledText>{formattedDate}</MyStyledText>
              </MyStyledItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
