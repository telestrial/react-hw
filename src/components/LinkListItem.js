import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import FileCopyTwoToneIcon from "@mui/icons-material/FileCopyTwoTone";

const LinkedListitem = ({ link }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Box sx={{ margin: ".3rem" }}>
      <a href={`${link.url}`}>{link.url}</a> &#8594;{" "}
      <a href={`https://hdwy.link/${link.slug}`}>
        https://hdwy.link/{link.slug}
      </a>
      <IconButton
        sx={{ marginLeft: ".1rem", color: clicked ? "none" : "#0f254a" }}
        onClick={() => {
          navigator.clipboard.writeText(`https://hdwy.link/${link.slug}`);
          setClicked(true);
        }}
      >
        <FileCopyTwoToneIcon />
      </IconButton>
    </Box>
  );
};

export default LinkedListitem;
