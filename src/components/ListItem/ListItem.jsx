import { MyStyledItemButton, MyStyledText, MyStyledTypography } from "./style";
import { ListItem } from "@mui/material";

export const ListItemBar = ({ note }) => {
  const today = new Date();
  const options = { month: "2-digit", day: "2-digit", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  const { name, id } = note;

  return (
    <ListItem>
      <MyStyledItemButton data-id={id}>
        <MyStyledTypography data-id={id}>{name}</MyStyledTypography>
        <MyStyledText data-id={id}>{formattedDate}</MyStyledText>
      </MyStyledItemButton>
    </ListItem>
  );
};
