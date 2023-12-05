import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import Stack from "@mui/material/Stack";
import ChatWindow from "../components/ChatWindow";
import Button from "@mui/material/Button";
import ButtonAppBar from "../components/AppBar";

const User = () => {
  const [userName, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);

  const handleLogin = () => {
    const body = {
      name: userName,
      email: userEmail,
    };
    axios
      .post("", body)
      .then(() => setIsNewUser(false))
      .catch((e) => alert(e));
  };

  return isNewUser ? (
    <div>
      <Stack direction="column" justifyContent="center" spacing={2}>
        <TextField
          required
          id="utlined-basic"
          label="Enter your name"
          variant="outlined"
          sx={{ width: "50%" }}
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          required
          type="email"
          id="utlined-basic"
          label="Enter your email"
          variant="outlined"
          sx={{ width: "50%" }}
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <Button variant="contained" onClick={handleLogin} sx={{ width: "50%" }}>
          Start
        </Button>
      </Stack>
    </div>
  ) : (
    <div>
      <Grid container sx={{ height: "10vh" }}>
        <ButtonAppBar />
      </Grid>
      <Grid container sx={{ height: "90vh" }}>
        <ChatWindow />
      </Grid>
    </div>
  );
};

export default User;
