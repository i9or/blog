import * as http from "http";
import {RequestListener} from "http";

const port = 4000;

const requestListener: RequestListener = (req, res) => {
  res.writeHead(200);
  res.end("Hello, blog!");
}

const server = http.createServer(requestListener);
server.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port}`)
});
