export const Socket = (io) => {
  // Socket.io logic
  io.on("connection", (socket) => {
    console.log("User connected");

    // User sends a message
    socket.on("user-message", (message) => {
      console.log("User: " + message);

      // Simulate admin response after a delay
      setTimeout(() => {
        const adminResponse = "Hello, this is the admin. How can I help you?";
        socket.emit("admin-message", adminResponse);
        console.log("Admin: " + adminResponse);
      }, 1000);
    });

    // Disconnect event
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
