import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./style";

export const SearchBox = () => {
  return (
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
  );
};
