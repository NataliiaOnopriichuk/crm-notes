import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";



export const useStyles = makeStyles((theme) => ({
    drawerContent: {
        overflowY: "scroll",
        width: '100%',
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
            width: '100%',
            boxSizing: "border-box",
        },
        [theme.breakpoints.up('sm')]: {
            width: 200,
            [`& .MuiDrawer-paper`]: {
                width: 200,
            },
        },
        [theme.breakpoints.up('md')]: {
            width: 240,
            [`& .MuiDrawer-paper`]: {
                width: 240,
            },
        },

    },
}));

export const MyStyledBox = styled(Box)(({ theme }) => ({
    overflow: "auto",
    paddingTop: "90px",
    [theme.breakpoints.down("sm")]: {
        paddingTop: "145px",
    },
}));
