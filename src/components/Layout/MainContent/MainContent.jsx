import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Sidebar } from "../../Sidebar/Sidebar";
import { Workspace } from "../../Workspace/Workspace";
import { useMedia } from "react-use";

export const MyStyledBox = styled(Box)(() => ({
  display: "flex",
  marginTop: "64px",
}));

export const MainContent = () => {
  const isMobile = useMedia("(max-width: 599px)");

  return (
    <MyStyledBox>
      <Sidebar />
      {!isMobile && <Workspace />}
    </MyStyledBox>
  );
};
