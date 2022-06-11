"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const fs = require("fs");
class Client {
    constructor(id) {
        const clientData = this.getClient(id);
        this.id = id;
        this.firstName = clientData.firstName;
        this.lastName = clientData.lastName;
        this.accounts = clientData.accounts;
        console.log(this.accounts);
    }
    getClient(clientId) {
        const clientData = JSON.parse(fs.readFileSync("./clientMockData.json", "utf8"))[clientId - 1];
        console.log(clientData);
        return clientData;
    }
    createNewAccount(type, name, firstDepositAmount) {
        const newAccount = {
            id: this.accounts.length + 1,
            name: name,
            type: type,
            amount: firstDepositAmount,
        };
        this.accounts.push(newAccount);
    }
    makeDeposit(accountId, depositAmount) {
        this.accounts[accountId - 1].amount += depositAmount;
    }
    makeWithdrawal(accountId, whitdrawalAmount) {
        this.accounts[accountId - 1].amount -= whitdrawalAmount;
    }
    displayClientInfos() {
        console.log(this.firstName +
            " " +
            this.lastName +
            " (id: " +
            this.id +
            ") has " +
            this.accounts.length +
            " account(s).");
        this.accounts.map((account) => console.log(account.name + ": " + account.amount));
    }
}
exports.Client = Client;
