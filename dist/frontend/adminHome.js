"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
const homePage = (client) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <h1>FinTech ABC</h1>
      <p>Welcome ${client.firstName} ${client.lastName}</p>

      <h2>Your accounts</h2>
      <table>
      <tr>
    <th>Account</th>
    <th>Amount</th>
  </tr>
      <tr>
      ${client.accounts
    .map((account, i) => `
    <td>${account.name}</td>
    <td>${account.amount}</td>
    </tr>
  `)
    .join("")}
        
      </table>
    </div>
  </body>
</html>`;
exports.homePage = homePage;
