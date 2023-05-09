import * as React from "react";
import List from "@mui/material/List";
import { Drawer } from "@mui/material";
import { MyStyledBox, useStyles } from "./style";
import { ListItemBar } from "../ListItem/ListItem";
import { useContext } from "react";
import {
  DataNotesContext,
  SelectedItemContext,
} from "../../service/serviceContext";

export const Sidebar = () => {
  const classes = useStyles();
  const { notes } = useContext(DataNotesContext);
  const { setSelectedItem } = useContext(SelectedItemContext);

  const handleItemClick = (event) => {
    const { target } = event;
    if (target.tagName === "BUTTON" || target.tagName === "P") {
      setSelectedItem(notes.find((note) => note.id === target.dataset.id));
    }
  };

  return (
    <Drawer className={classes.drawerContent} variant="permanent">
      <MyStyledBox>
        <List onClick={handleItemClick}>
          {notes.length > 0 &&
            notes.map((note) => <ListItemBar key={note.id} note={note} />)}
        </List>
      </MyStyledBox>
    </Drawer>
  );
};
