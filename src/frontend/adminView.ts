import { Account } from "../backend/Client";
export const adminPage = (admin, client) => `
<!DOCTYPE html>
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
      <h2>Admin page</h2>
      <p>Welcome ${admin.firstName} ${admin.lastName}</p>
      <p>Client: ${client.firstName} ${client.lastName}</p>
      <table>
      <tr>
        <th>Account</th>
        <th>Amount</th>
      </tr>
      <tr>
        ${client.accounts
          .map(
            (account: Account) => `
        <td >${account.name}</td>
        <td class="accountList" id=${account.id}>${account.amount}</td>
      </tr>
  `
          )
          .join("")}
        
      </table>
      <div>
      <h3>Transaction</h3>
      <select id="transactionType">
        <option value="0">Deposit</option>
        <option value="1">Withdrawal</option>
      </select>
        <label for="amount">Amount</label>
        <input type="text" id="amount">
        <select id="account">
        ${client.accounts
          .map(
            (account: Account) => `
        <option value=${account.id}>${account.name}</option>
  `
          )
          .join("")}
        </select>
        <input id="confirm-btn" type="submit" value="Confirm transaction" class="btn">
      </div>
      <script>var exports = {};</script>
      <script type="module" src="admin.js"></script> 
    </div>
  </body>
</html>`;
