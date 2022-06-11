import * as http from "http";
import { homePage } from "../frontend";
import { Client } from "../backend/Client";

const hostname = "127.0.0.1";
const port = 8000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);

  let client = new Client(1);
  res.end(homePage(client));
};
const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
