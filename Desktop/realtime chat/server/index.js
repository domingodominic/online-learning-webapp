const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

// Use process.env.PORT or default to port 3008
const port = process.env.PORT || 3007;

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("user connected: ", socket.id);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`user with ID ${socket.id} joined room in ${data}`);
  });
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

// Use the dynamically assigned port
server.listen(port, () => {
  console.log(`Server is running on port}`);
});
