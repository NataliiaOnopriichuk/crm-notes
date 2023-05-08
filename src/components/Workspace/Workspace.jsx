import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useContext } from "react";
import {
  DataNotesContext,
  SelectedItemContext,
} from "../../service/serviceContext";

export const Workspace = () => {
  const { notes } = useContext(DataNotesContext);
  const { selectedItem } = useContext(SelectedItemContext);

  const note = notes.find((notice) => notice.id === selectedItem);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {selectedItem && note ? (
        <Typography paragraph sx={{ m: 0 }}>
          {note.desc}
        </Typography>
      ) : null}
    </Box>
  );
};
