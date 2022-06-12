type Transaction = {
  amount: number;
  account: number;
  transactionType: string;
};

const confirmBtn = document.getElementById("confirm-btn");
confirmBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = document.getElementById("amount");
  const account = document.getElementById("account");
  const transactionType = document.getElementById("transactionType");
  const transaction: Transaction = {
    amount: amount.value,
    account: account.value,
    transactionType: transactionType.value,
  };
  async function postData(url = "", transaction: Transaction) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(transaction),
    });

    return response.json();
  }

  postData("http://localhost:8000/admin/transaction", transaction).then(
    (response) => {
      updataClientData(response, transaction.account);
    }
  );
});

const updataClientData = (updatedData, accountId) => {
  const accountList = document.getElementsByClassName("accountList");
  const selectedAccount = accountList.namedItem(accountId.toString());
  selectedAccount.innerHTML = updatedData.accounts[accountId - 1].amount;
};
