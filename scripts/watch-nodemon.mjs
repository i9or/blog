import nodemon from "nodemon";
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 4001 });

nodemon({
  script: "dist/index.js",
  ext: "js md",
  watch: ["dist", "content"],
});

nodemon.on("restart", function () {
  setTimeout(() => {
    wss.clients.forEach((client) => client.send("reload"));
  }, 750);
});
