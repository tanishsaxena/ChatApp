import React, { useState } from "react";
import { Grid } from "@mui/material";
import ChatWindow from "../components/ChatWindow";
import ChatUsers from "../components/ChatUsers";
import ButtonAppBar from "../components/AppBar";

const Admin = () => {
  const [activeUser, setActiveUser] = useState({ userName: "", userId: "" });

  return (
    <div>
      <Grid container sx={{ height: "10vh" }}>
        <ButtonAppBar profile="admin" />
      </Grid>
      <Grid container sx={{ height: "90vh" }}>
        <Grid xs={4} sx={{ padding: 4 }}>
          <ChatUsers setActiveUser={setActiveUser} />
        </Grid>
        <Grid xs={8}>
          <ChatWindow activeUser={activeUser} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;
