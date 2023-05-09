import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const MyStyledTextArea = styled(Box)(({ theme }) => ({
    height: "100vh",
    width: "100%",
    border: "none",
    resize: "none",
    padding: "20px",
    fontFamily: "Roboto",
    fontWeight: theme.typography.caption,
    fontSize: "14px",
    color: theme.palette.text.secondary,
    background: '#f0f0f0',
    ":focus": {
        outline: 'none',
        borderWidth: 'none',
    }

}));

