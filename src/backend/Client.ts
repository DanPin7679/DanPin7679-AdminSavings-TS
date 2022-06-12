import fetch from "node-fetch";

export interface Account {
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

  constructor() {
    this.id = null;
    this.firstName = null;
    this.lastName = null;
    this.accounts = [];
  }

  async getClient(clientId: number) {
    const response = await fetch("http://localhost:3000/clientMockData");
    const data = await response.json();
    this.id = data[clientId - 1].id;
    this.firstName = data[clientId - 1].firstName;
    this.lastName = data[clientId - 1].lastName;
    this.accounts = data[clientId - 1].accounts;
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
