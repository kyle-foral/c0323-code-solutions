/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
};

Account.prototype.deposit = function (amount) {
  var transaction = new Transaction('deposit',amount);
  if (amount >= 5) {
    this.transactions.push(transaction);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var transaction = new Transaction('withdraw', amount);
  if (amount >= 5) {
    this.transactionamount;
    return true;
  } else {
    return false;
  }
}

Account.prototype.getBalance = function () {
  var transaction = new Transaction('get balance', amount);
if (Account.deposit(transaction) - Account.withdraw(transaction) === 0)
return 0
};
