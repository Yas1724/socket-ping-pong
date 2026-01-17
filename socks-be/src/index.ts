import WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (socket) => {
  console.log("user connected");

  socket.on("message",(e)=>{
    if(e.toString()==="ping"){
      socket.send("pong");
    }
  })
});

