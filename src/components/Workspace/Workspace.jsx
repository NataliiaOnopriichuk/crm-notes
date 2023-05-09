import * as React from "react";
import { useContext } from "react";
import { SelectedItemContext } from "../../service/serviceContext";
import { MyStyledTextArea } from "./style";
import { SelectedContentContext } from "../../service/serviceContext.js";
export const Workspace = () => {
  const { selectedItem } = useContext(SelectedItemContext);
  const { content, setContent } = useContext(SelectedContentContext);

  return (
    selectedItem && (
      <MyStyledTextArea
        component="textarea"
        value={content || selectedItem?.desc}
        onChange={(e) => setContent(e.target.value)}
      >
        {selectedItem.desc}
      </MyStyledTextArea>
    )
  );
};
