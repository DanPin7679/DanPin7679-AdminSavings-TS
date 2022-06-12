import * as http from "http";
import * as fs from "fs";
import { Client } from "../backend/Client";
import { AdminModel } from "./AdminModel";
import { homePage } from "../frontend/index";
import { adminPage } from "../frontend/adminView";

const hostname = "127.0.0.1";
const port = 8000;

const requestListener = function (req, res) {
  let client = new Client();
  let admin = new AdminModel();
  console.log(req.url);
  switch (req.url) {
    case "/home":
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      client.getClient(1).then(() => {
        res.end(homePage(client));
      });
      break;
    case "/admin/transaction":
      var body = "";
      req.on("data", function (chunk) {
        body += chunk;
      });

      req.on("end", function () {
        res.writeHead(200, { "Content-Type": "text/html" });
        client.getClient(1).then(() => {
          var data = JSON.parse(body);
          console.log(data);
          data.transactionType == "0"
            ? client.makeDeposit(Number(data.account), Number(data.amount))
            : client.makeWithdrawal(Number(data.account), Number(data.amount));

          res.end(JSON.stringify(client));
        });

        // client.makeDeposit(body.account, body.amount);
        // console.log(client);
        // res.end(body);
      });
      break;
    case "/admin.js":
      res.setHeader("Content-Type", "text/javascript");
      fs.readFile("dist/frontend" + req.url, function (err, data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }

        res.writeHead(200);
        res.end(data);
      });
      break;
    case "/admin":
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      client.getClient(1).then(() => {
        admin.getAdmin(1).then(() => {
          res.end(adminPage(admin, client));
        });
      });
      break;

    default:
      res.setHeader("Content-Type", "text/html");
      res.writeHead(200);
      res.end(`<h1>Sorry, this page does not exit</h1>`);
      break;
  }
};
const server = http.createServer(requestListener);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
