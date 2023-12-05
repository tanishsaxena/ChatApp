import React, { useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";

const ChatFooter = (props) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const body = { message, ts: Date.now() };
    axios
      .post("", body)
      .then(() => props?.getChats())
      .catch((e) => alert(e));
  };

  return (
    <Stack
      direction="row"
      justifyContent="center"
      spacing={2}
      sx={{ maxHeight: "8vh", width: "100%" }}
    >
      <TextField
        id="utlined-basic"
        label="Type here.."
        variant="outlined"
        sx={{ width: "70%" }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button
        variant="contained"
        endIcon={<SendIcon />}
        disabled={!message}
        onClick={sendMessage}
      >
        Send
      </Button>
    </Stack>
  );
};

export default ChatFooter;
