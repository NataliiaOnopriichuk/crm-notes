import * as React from "react";
import { Add, DeleteOutline } from "@mui/icons-material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import { useMedia } from "react-use";
import {
  MyStyledAppBar,
  MyStyledButton,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  useStylesButtonWrapper,
  useStylesToolbar,
} from "./style";

export const Header = () => {
  const isMobile = useMedia("(max-width: 599px)");
  const classesToolbar = useStylesToolbar();
  const classesButtonWrapper = useStylesButtonWrapper();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MyStyledAppBar>
        <Toolbar className={isMobile && classesToolbar.container}>
          <Box className={classesButtonWrapper.container}>
            <MyStyledButton variant="contained">
              <Add style={{ color: "#606060" }} />
            </MyStyledButton>
            <MyStyledButton variant="contained">
              <DeleteOutline style={{ color: "#606060" }} />
            </MyStyledButton>
            <MyStyledButton variant="contained">
              <DriveFileRenameOutlineIcon style={{ color: "#606060" }} />
            </MyStyledButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Search sx={{ display: { xs: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon style={{ color: "#606060" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              style={{ color: "#606060" }}
            />
          </Search>
        </Toolbar>
      </MyStyledAppBar>
    </Box>
  );
};
