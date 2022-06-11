"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.accounts = [];
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
// let client = new Client(1, "dany", "pineault");
// client.displayClientInfos();
// client.createNewAccount("cash", "myAccount", 2000);
// client.displayClientInfos();
// client.createNewAccount("cash", "familyEmegency", 5000);
// client.displayClientInfos();
// client.makeDeposit(1, 2000);
// client.displayClientInfos();
// client.makeWithdrawal(1, 3000);
// client.displayClientInfos();
