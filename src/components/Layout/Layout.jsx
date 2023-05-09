import { Box, CssBaseline } from "@mui/material";
import { Header } from "./Header/Header";
import { MainContent } from "./MainContent/MainContent";
import debounce from "lodash.debounce";
import { useEffect } from "react";
import { useContext } from "react";
import {
  DataNotesContext,
  SelectedContentContext,
  SelectedItemContext,
} from "../../service/serviceContext";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
} from "../../service/api";

export const Layout = () => {
  const { selectedItem } = useContext(SelectedItemContext);
  const { setNotes } = useContext(DataNotesContext);
  const { content } = useContext(SelectedContentContext);
  const title = content.length > 10 ? `${content.slice(0, 7)}...` : content;

  useEffect(() => {
    async function fetchData() {
      const arrayNotes = await getAllNotes();
      setNotes((prevNotes) => [...prevNotes, ...arrayNotes]);
    }
    fetchData();
  }, [setNotes]);

  const addNote = async () => {
    const newNote = await createNote();
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteSelectedNote = async () => {
    if (selectedItem) {
      await deleteNote(selectedItem.id);
      setNotes((prevNotes) =>
        prevNotes.filter((note) => note.id !== selectedItem.id)
      );
    }
  };

  const updateSelectedNote = async () => {
    if (selectedItem) {
      const updatedNote = await updateNote(selectedItem.id, title, content);
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === selectedItem.id ? updatedNote : note
        )
      );
    }
  };

  const debouncedSaveNote = debounce(updateSelectedNote, 500);

  useEffect(() => {
    debouncedSaveNote();
    return debouncedSaveNote.cancel;
    // eslint-disable-next-line
  }, [content]);

  return (
    <Box>
      <CssBaseline />
      <Header addNote={addNote} deleteSelectedNote={deleteSelectedNote} />
      <main>
        <MainContent />
      </main>
    </Box>
  );
};
