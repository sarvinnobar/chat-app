const express = require("express");
const app = express();
const PORT = 4000;
const http = require("http").Server(app);
const cors = require("cors");

app.use(cors());
const socketIO = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});
socketIO.on("connection", (socket) => {
  console.log(`user connected`);
  socket.on("message", (data) => {
    socketIO.emit("messageResponse", data);
  });
  socket.on("typing", (data) => socket.broadcast.emit("typingResponse", data));
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
