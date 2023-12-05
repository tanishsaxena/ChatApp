import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import ChatFooter from "./ChatFooter";
import axios from "axios";

const cuurUser = "admin";

const data = [
  {
    id: 0,
    content: "Hi",
    sender: "admin",
    ts: "10:30 pm",
  },
  {
    id: 1,
    content: "Hiiii",
    sender: "user",
    ts: "10:32 pm",
  },
  {
    id: 1,
    content: "Hiiii",
    sender: "user",
    ts: "10:32 pm",
  },
  {
    id: 1,
    content: "Hiiii",
    sender: "user",
    ts: "10:32 pm",
  },
  {
    id: 1,
    content: "Hiiii",
    sender: "admin",
    ts: "10:32 pm",
  },
  {
    id: 1,
    content: "H",
    sender: "admin",
    ts: "10:32 pm",
  },
  {
    id: 1,
    content: "H",
    sender: "user1",
    ts: "10:32 pm",
  },
  {
    id: 1,
    content: "H",
    sender: "admin",
    ts: "10:32 pm",
  },
  {
    id: 1,
    content: "H",
    sender: "user1",
    ts: "10:32 pm",
  },
  {
    id: 1,
    content: "H",
    sender: "admin",
    ts: "10:32 pm",
  },
  {
    id: 1,
    content: "H",
    sender: "user1",
    ts: "10:32 pm",
  },
];

const ChatBubble = (props) => {
  return (
    <Grid item xs={12}>
      <Paper
        elevation={1}
        sx={{
          background: props?.isSender ? "#00796B" : "#1565C0",
          paddingLeft: 1,
          paddingRight: 1,
          textAlign: props?.isSender ? "right" : "left",
          color: "white",
          float: props?.isSender ? "right" : "left",
        }}
      >
        <Typography variant="body1">{props?.content}</Typography>
        <Typography variant="caption">{props?.ts}</Typography>
      </Paper>
    </Grid>
  );
};

const ChatWindow = (props) => {
  const [userChats, setUserChats] = useState(data);

  const getChats = async () => {
    await axios
      .get("")
      .then((data) => setUserChats(data))
      .catch((e) => alert(e));
  };

  useEffect(() => {
    // getChats();
  }, [props?.activeUser]);

  const chats = userChats.map((chat) => {
    return (
      <ChatBubble
        isSender={chat?.sender === cuurUser}
        content={chat?.content}
        ts={chat?.ts}
      />
    );
  });

  return (
    <>
      <Grid container sx={{ height: "80vh" }}>
        <Grid container sx={{ height: "5vh" }}>
          <h4>Chat with {props?.activeUser?.userName}</h4>
        </Grid>
        <div
          style={{
            width: "100%",
            paddingLeft: 6,
            paddingRight: 6,
            overflowY: "scroll",
            maxHeight: "65vh",
          }}
        >
          <Grid container spacing={2}>
            {chats}
          </Grid>
        </div>
      </Grid>
      <Grid container sx={{ height: "10vh" }}>
        <ChatFooter getChats={getChats} />
      </Grid>
    </>
  );
};

export default ChatWindow;
