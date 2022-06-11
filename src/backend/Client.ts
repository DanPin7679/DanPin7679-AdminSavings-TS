import * as fs from "fs";

interface Account {
  id: number;
  type: string;
  name: string;
  amount: number;
}

export class Client {
  id: number;
  firstName: string;
  lastName: string;
  accounts: Account[];

  constructor(id: number) {
    const clientData = this.getClient(id);
    this.id = id;
    this.firstName = clientData.firstName;
    this.lastName = clientData.lastName;
    this.accounts = clientData.accounts;
    console.log(this.accounts);
  }

  getClient(clientId: number) {
    const clientData = JSON.parse(
      fs.readFileSync("./clientMockData.json", "utf8")
    )[clientId - 1];
    console.log(clientData);
    return clientData;
  }

  createNewAccount(type: string, name: string, firstDepositAmount: number) {
    const newAccount: Account = {
      id: this.accounts.length + 1,
      name: name,
      type: type,
      amount: firstDepositAmount,
    };
    this.accounts.push(newAccount);
  }

  makeDeposit(accountId: number, depositAmount: number) {
    this.accounts[accountId - 1].amount += depositAmount;
  }

  makeWithdrawal(accountId: number, whitdrawalAmount: number) {
    this.accounts[accountId - 1].amount -= whitdrawalAmount;
  }

  displayClientInfos() {
    console.log(
      this.firstName +
        " " +
        this.lastName +
        " (id: " +
        this.id +
        ") has " +
        this.accounts.length +
        " account(s)."
    );
    this.accounts.map((account) =>
      console.log(account.name + ": " + account.amount)
    );
  }
}
