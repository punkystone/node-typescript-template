import { WebSocketServer } from "ws";

export const startSocket = () => {
  const wss = new WebSocketServer({ port: 8080 });
  wss.on("connection", (ws) => {
    ws.on("message", (message) => {
      console.log(`Received message => ${message}`);
      ws.send(`Hello, you sent => ${message}`);
    });
    ws.send("Hi there, I am a WebSocket server");
  });
};
