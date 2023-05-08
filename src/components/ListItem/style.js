import ListItemButton from "@mui/material/ListItemButton";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const MyStyledTypography = styled(Typography)(({ theme }) => ({
    fontFamily: "Roboto",
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.secondary,
}));

export const MyStyledText = styled(Typography)(({ theme }) => ({
    fontFamily: "Roboto",
    fontWeight: theme.typography.caption,
    fontSize: "12px",
    color: theme.palette.text.secondary,
}));

export const MyStyledItemButton = styled(Button)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    borderBottom: "1px solid #dedede",
    width: '100%',
    padding: '0 0 8px 0',
}));