import nodemon from "nodemon";

// const wss = new WebSocketServer({ port: 4001 });

nodemon({
  script: "dist/index.js",
  ext: "js",
  watch: ["dist"],
});

// nodemon.on("restart", function () {
//   setTimeout(() => {
//     wss.clients.forEach((client) => client.send("reload"));
//   }, 750);
// });
