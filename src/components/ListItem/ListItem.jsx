import { useContext } from "react";
import { MyStyledItemButton, MyStyledText, MyStyledTypography } from "./style";
import { ListItem } from "@mui/material";
import { SelectedItemContext } from "../../service/serviceContext";

export const ListItemBar = ({ note }) => {
  const { selectedItem } = useContext(SelectedItemContext);
  const today = new Date();
  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  const { name, id } = note;
  const selectedNote = note?.id === selectedItem?.id;

  return (
    <ListItem style={{ backgroundColor: selectedNote ? "#c2c2c2" : null }}>
      <MyStyledItemButton data-id={id}>
        <MyStyledTypography data-id={id}>{name}</MyStyledTypography>
        <MyStyledText data-id={id}>{formattedDate}</MyStyledText>
      </MyStyledItemButton>
    </ListItem>
  );
};
