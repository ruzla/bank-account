function Account(name) {
    this.accountHolder = name;
    this.deposits = [];
    this.withdrawls = [];
    this.transactions = [];
    this.balance = 0;
};

Account.prototype.deposit = function(ammount) {
    this.deposits.push(ammount);
    this.transactions.push(ammount);
    this.balance += ammount;
};

Account.prototype.withdraw = function(ammount) {
    this.withdrawls.push(ammount);
    this.transactions.push(ammount);
    this.balance += ammount;
};

Account.prototype.checkBalance = function() {
    //  return this.balance.reduce((acc, current) => (acc += current), 0);
    return this.balance;
};

Account.prototype.viewTransactions = function() {
    return this.transactions;
};


module.exports = {
    Account,
};



