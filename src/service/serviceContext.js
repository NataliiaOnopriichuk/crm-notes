import { createContext, useState } from "react";

export const DataNotesContext = createContext();
export const SelectedItemContext = createContext();
export const SelectedContentContext = createContext();


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

export const ContentContextProvider = ({ children }) => {
    const [content, setContent] = useState('');
    return (
        <SelectedContentContext.Provider
            value={{ content, setContent }}
        >
            {children}
        </SelectedContentContext.Provider>
    );
}
