"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const frontend_1 = require("../frontend");
const Client_1 = require("../backend/Client");
const hostname = "127.0.0.1";
const port = 8000;
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    let client = new Client_1.Client(1);
    res.end((0, frontend_1.homePage)(client));
};
const server = http.createServer(requestListener);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
