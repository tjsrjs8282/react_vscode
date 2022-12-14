import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { VscMarkdown } from "react-icons/vsc";

import React from "react";

const AppButtons = () => {
  const navigate = useNavigate();
  return (
    <TreeView
      label="Home"
      onClick={() => {
        navigate("/");
      }}
    >
      <TreeItem
        label="test1"
        icon={<VscMarkdown color="#6997d5" />}
        onClick={() => {
          navigate("/test");
        }}
      ></TreeItem>
      <TreeItem
        label="test1"
        icon={<VscMarkdown color="#6997d5" />}
        onClick={() => {
          navigate("/2");
        }}
      ></TreeItem>
    </TreeView>
  );
};

export default AppButtons;
