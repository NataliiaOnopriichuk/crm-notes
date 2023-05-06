import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export const ListItemBar = () => {
  return (
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
            <ListItemButton style={{ borderBottom: "1px solid #dedede" }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
