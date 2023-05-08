import { styled, alpha } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";

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