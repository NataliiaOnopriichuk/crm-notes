import { useContext, useEffect } from "react";
import { Layout } from "./Layout/Layout";
import { getAllNotes } from "../service/api";
import { DataNotesContext } from "../service/serviceContext";

export const App = () => {
  const { setNotes } = useContext(DataNotesContext);

  useEffect(() => {
    async function fetchData() {
      const arrayNotes = await getAllNotes();
      setNotes(arrayNotes);
    }
    fetchData();
  }, [setNotes]);

  return (
    <div>
      <Layout />
    </div>
  );
};
