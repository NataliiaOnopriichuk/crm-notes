import { createContext, useState } from "react";

export const DataNotesContext = createContext();
export const SelectedItemContext = createContext();


export const DataImagesContextProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    return (
        <DataNotesContext.Provider
            value={{ notes, setNotes }}
        >
            {children}
        </DataNotesContext.Provider>
    );
}

export const SelectedItemContextProvider = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    return (
        <SelectedItemContext.Provider
            value={{ selectedItem, setSelectedItem }}
        >
            {children}
        </SelectedItemContext.Provider>
    );
}