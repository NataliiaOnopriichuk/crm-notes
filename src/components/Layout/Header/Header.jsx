import * as React from "react";
import { Add, DeleteOutline } from "@mui/icons-material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useMedia } from "react-use";
import {
  MyStyledAppBar,
  MyStyledButton,
  useStylesButtonWrapper,
  useStylesToolbar,
} from "./style";
import { SearchBox } from "../../SearchBox/SearchBox";
import { useContext } from "react";
import {
  DataNotesContext,
  SelectedItemContext,
} from "../../../service/serviceContext";
import { createNote, deleteNote } from "../../../service/api";

export const Header = () => {
  const isMobile = useMedia("(max-width: 599px)");
  const classesToolbar = useStylesToolbar();
  const classesButtonWrapper = useStylesButtonWrapper();
  const { selectedItem } = useContext(SelectedItemContext);
  const { notes, setNotes } = useContext(DataNotesContext);

  const addNote = async () => {
    const newNote = await createNote();
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteSelectedNote = async () => {
    if (selectedItem) {
      const selectedNote = notes.find((note) => note.id === selectedItem);
      if (selectedNote) {
        await deleteNote(selectedNote.id);
        setNotes((prevNotes) =>
          prevNotes.filter((note) => note.id !== selectedNote.id)
        );
      }
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyStyledAppBar>
        <Toolbar className={isMobile ? classesToolbar.container : null}>
          <Box className={classesButtonWrapper.container}>
            <MyStyledButton variant="contained" onClick={addNote}>
              <Add style={{ color: "#606060" }} />
            </MyStyledButton>
            <MyStyledButton
              variant="contained"
              disabled={selectedItem === null}
            >
              <DeleteOutline
                style={{ color: "#606060" }}
                onClick={deleteSelectedNote}
              />
            </MyStyledButton>
            <MyStyledButton
              variant="contained"
              disabled={selectedItem === null}
            >
              <DriveFileRenameOutlineIcon style={{ color: "#606060" }} />
            </MyStyledButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <SearchBox />
        </Toolbar>
      </MyStyledAppBar>
    </Box>
  );
};
