import { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const CopyLink = ({ link }) => {
  const [copyClicked, setCopyClicked] = useState(false);
  return (
    <TextField
      sx={{
        maxWidth: "max-content",
        backgroundColor: "white",
        padding: ".1rem 1rem",
        border: "none"
      }}
      variant="standard"
      InputProps={{
        endAdornment: (
          <IconButton
            onClick={() => {
              navigator.clipboard.writeText(link);
              setCopyClicked(true);
            }}
          >
            <FileCopyIcon sx={{ color: "#0f254a" }} />
          </IconButton>
        )
      }}
      value={copyClicked ? "Copied!" : link}
    />
  );
};

export default CopyLink;
