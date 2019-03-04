function Account(name) {
    this.accountHolder = name;
    this.deposits = [];
    this.withdrawls = [];
    this.balance = [];
};

Account.prototype.deposit = function(ammount) {
    this.deposits.push(ammount);
    this.balance.push(ammount);
};

Account.prototype.withdraw = function(ammount) {
    this.withdrawls.push(ammount);
    this.balance.push(ammount);
};

Account.prototype.checkBalance = function() {
     return this.balance.reduce((acc, current) => (acc += current), 0);

};

Account.prototype.viewTransactions = function() {
    return this.balance;
};


module.exports = {
    Account,
};



