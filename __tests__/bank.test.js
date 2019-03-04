const { Account }  = require('../src/bank.js');

describe('Constructor', () => {
    it('returns an object', () => {
        expect(new Account('russell')).toBeInstanceOf(Object);
    });
});


describe('Deposit', () => {
    const currentAccount = new Account('Russell');
    currentAccount.deposit(100);
    
    it('array to contain one deposits', () => {
     expect(currentAccount.deposits).toHaveLength(1);
    });
    
    it('array to contain 100', () => {
        expect(currentAccount.deposits[0]).toEqual(100);
    });
});


describe('Withdraw', () => {
    const currentAccount = new Account('Russell');
    currentAccount.withdraw(-100);
    
    it('expect array to contain one withdrawal', () => {
        expect(currentAccount.withdrawls).toHaveLength(1);
    });

    it('array to contain -100', () => {
        expect(currentAccount.withdrawls[0]).toEqual(-100);
    });
});

describe('Check current balance', () => {
    const currentAccount = new Account('Russell');
    currentAccount.deposit(100);
    currentAccount.withdraw(-100);
    currentAccount.deposit(50);
    
    it('the balance should be 50', () => {
        expect(currentAccount.checkBalance()).toBe(50);
    });
});

describe('View a list of transactions', () => {
    const currentAccount = new Account('Russell');
    currentAccount.deposit(100);
    currentAccount.withdraw(-100);
    currentAccount.deposit(50);

    it('lists transactions', () => {
        expect(currentAccount.viewTransactions()).toEqual([100, -100, 50]);
    })


});
