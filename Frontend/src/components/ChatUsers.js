import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack, Typography } from "@mui/material";
import axios from "axios";

const data = [
  {
    userId: 0,
    name: "Tacaz",
    hasNewMessage: true,
  },
  {
    userId: 0,
    name: "Kira",
    hasNewMessage: false,
  },
];

const UserBubble = (props) => {
  return (
    <Grid item xs={12} onClick={props?.action}>
      <Paper
        elevation={1}
        sx={{
          background: "#00796B",
          padding: 2,
          textAlign: "left",
          color: "white",
        }}
      >
        <Typography variant="body1">{props?.name}</Typography>
        {props?.hasNewMessage && (
          <Typography variant="caption">New message</Typography>
        )}
      </Paper>
    </Grid>
  );
};

const ChatUsers = (props) => {
  const [conversations, setConversations] = useState(data);

  const getConversations = async () => {
    await axios
      .get("")
      .then((data) => setConversations(data))
      .catch((e) => alert(e));
  };

  useEffect(() => {
    // getConversations()
  }, []);

  const users = conversations.map((user) => {
    return (
      <UserBubble
        name={user.name}
        hasNewMessage={user.hasNewMessage}
        action={() => {
          props.setActiveUser({ userName: user.name, userId: user.userId });
        }}
      />
    );
  });

  return (
    <>
      <h3>Messages</h3>
      <Stack spacing={2}>{users}</Stack>
    </>
  );
};

export default ChatUsers;
