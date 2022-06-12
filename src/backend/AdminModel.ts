import fetch from "node-fetch";

export class AdminModel {
  id: number;
  firstName: string;
  lastName: string;

  constructor() {
    this.id = null;
    this.firstName = null;
    this.lastName = null;
  }

  async getAdmin(adminId: number) {
    const response = await fetch("http://localhost:3000/adminMockData");
    const data = await response.json();
    this.id = data[adminId - 1].id;
    this.firstName = data[adminId - 1].firstName;
    this.lastName = data[adminId - 1].lastName;
  }
}
