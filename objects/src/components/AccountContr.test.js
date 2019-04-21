import AccountContr from './AccountContr.js';
import Account from './Account.js';

test('test new accountContr instantiation', () => {
	const accountCtr1 = new AccountContr();
	expect(accountCtr1.acctList.length).toBe(0);

	// console.log('now test addAccount method');
	accountCtr1.addAccount('chequing', 2000);
	accountCtr1.addAccount('savings', 1000);
	accountCtr1.addAccount('chequing', 500);
	accountCtr1.addAccount('investment', 10);
	// console.log('last acct created is ' + accountCtr1.acctList[3].acctID);


	// console.log('now test for new account values');
	// console.log('first account is = ', accountCtr1.acctList[0]);
	expect(accountCtr1.acctList[0].acctType).toBe('chequing');
	expect(accountCtr1.acctList[0].balance).toBe(2000);
	expect(accountCtr1.acctList[0].acctID).toBe(1);

	// console.log('test account deletion - ref using acctID');
	accountCtr1.deleteAccount(4);
	expect(accountCtr1.acctList.length).toBe(3);

	// console.log('test accounts total');
	// // console.log('acct total is ' + accountCtr1.getAccountsTotal());
	expect(accountCtr1.getAccountsTotal()).toBe(3500);
	expect(accountCtr1.getAccountsTotal()).toBe(3500);

	// // console.log('test max account');
	// // console.log('max account ID is ' + accountCtr1.getMaxAccount());
	expect(accountCtr1.getMaxAccount()).toBe(1);

	// // console.log('test min account');
	expect(accountCtr1.getMinAccount()).toBe(3);

	// console.log('test findAccount function');
	// console.log('account to delete is ', accountCtr1.findAccountIndex(2));

	expect(accountCtr1.findAccountIndex(2)).toBe(1)

});