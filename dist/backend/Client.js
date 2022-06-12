"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const node_fetch_1 = require("node-fetch");
class Client {
    constructor() {
        this.id = null;
        this.firstName = null;
        this.lastName = null;
        this.accounts = [];
    }
    getClient(clientId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, node_fetch_1.default)("http://localhost:3000/clientMockData");
            const data = yield response.json();
            this.id = data[clientId - 1].id;
            this.firstName = data[clientId - 1].firstName;
            this.lastName = data[clientId - 1].lastName;
            this.accounts = data[clientId - 1].accounts;
        });
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
