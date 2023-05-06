import { styled, alpha } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";

export const MyStyledAppBar = styled(AppBar)(({ theme }) => ({
    position: "fixed",
    zIndex: theme.zIndex.tooltip,
    backgroundColor: '#818181',
}));

export const MyStyledButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1, 1),
    backgroundColor: alpha(theme.palette.background.default, 0.8),
    minWidth: 0,
    "&:hover": {
        backgroundColor: alpha(theme.palette.background.default, 0.4),
    },
}));

export const Search = styled("div")(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.background.default, 0.8),
    "&:hover": {
        backgroundColor: alpha(theme.palette.background.default, 0.5),
    },
    margin: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

export const useStylesToolbar = makeStyles((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column-reverse",
        gap: "10px",
        padding: "10px",
    },
}));

export const useStylesButtonWrapper = makeStyles((theme) => ({
    container: {
        display: "flex",
        gap: "45px",

        [theme.breakpoints.up("sm")]: {
            gap: "20px",
        },
    },
}));