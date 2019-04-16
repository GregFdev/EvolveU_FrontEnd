import AccountContr from './AccountContr.js';
import Account from './Account.js';

test('test new accountContr instantiation', () => {
	const accountCtr1 = new AccountContr();
	expect(accountCtr1.acctList.length).toBe(0);

	// console.log('now test addAccount method');
	accountCtr1.addAccount('chequing', 2000, 'Greg');
	
	// console.log('now test for new account values');
	// console.log(accountCtr1.acctList[0].);
	expect(accountCtr1.acctList[0].acctType).toBe('chequing');
	expect(accountCtr1.acctList[0].balance).toBe(2000);
	expect(accountCtr1.acctList[0].userName).toBe('Greg');
	expect(accountCtr1.acctList[0].acctID).toBe(0);

	// console.log('test account deletion');
	accountCtr1.deleteAccount(0);
	// console.log('new length is ' + accountCtr1.acctList.length);
	expect(accountCtr1.acctList.length).toBe(0);

	// console.log('add three accounts and view acctlist');
	// console.log('current list is :' + accountCtr1.acctList.length);
	accountCtr1.addAccount('savings', 100000, 'Sarah');
	accountCtr1.addAccount('chequing', 500, 'Julia');
	accountCtr1.addAccount('investment', 10000, 'Nats');
	expect(accountCtr1.acctList.length).toBe(3);
	// console.log(accountCtr1.acctList);

	console.log('test add accounts total');
	// console.log('acct total is ' + accountCtr1.getAccountsTotal());
	expect(accountCtr1.getAccountsTotal()).toBe(110500);

	console.log('test max account');
	// console.log('max account ID is ' + accountCtr1.getMaxAccount());
	expect(accountCtr1.getMaxAccount()).toBe(1);

	console.log('test min account');
	expect(accountCtr1.getMinAccount()).toBe(2);

});