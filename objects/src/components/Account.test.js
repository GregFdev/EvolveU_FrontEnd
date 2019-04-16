// import React from 'react';
import Account from './Account.js';


test('test new account instantiation', () => {
	const gregAccount = new Account('chequing', 10);
});



test('check initial balance', () => {
	const gregAccount = new Account('chequing', 10);
	expect(gregAccount.balance).toBe(10);
	});

test('check balance method', () => {
	const gregAccount = new Account('chequing', 10);
	gregAccount.deposit(10);
	expect(gregAccount.balance).toBe(20);

});

test('test withdraw method and result', () => {
	const gregAccount = new Account('chequing', 10);
	gregAccount.withdrawal(5);
	expect(gregAccount.balance).toBe(5);

});

test('test account name', () => {
	const gregAccount = new Account('chequing', 10);


})