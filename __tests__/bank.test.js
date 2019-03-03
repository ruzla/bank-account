const { Account }  = require('../src/bank.js');

describe('Constructor', () => {
    it('returns an object', () => {
        expect(new Account('russell')).toBeInstanceOf(Object);
    });
});


describe('Deposit', () => {

});


describe('Withdraw', () => {

});

describe('Check current balance', () => {

});

describe('View a list of transactions', () => {

});
