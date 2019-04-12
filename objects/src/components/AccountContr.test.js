import AccountContr from './AccountContr.js';
import Account from './Account.js';

test('test new accountContr instantiation', () => {
	const accountCtr1 = new AccountContr();
	expect(accountCtr1.acctList.length).toBe(0);

	console.log('now test addAccount method');
	accountCtr1.addAccount('chequing', 2000, 'Greg');
	
	console.log('now test for new account values');
	// console.log(accountCtr1.acctList[0].);
	expect(accountCtr1.acctList[0].acctType).toBe('chequing');
	expect(accountCtr1.acctList[0].balance).toBe(2000);
	expect(accountCtr1.acctList[0].userName).toBe('Greg');
	expect(accountCtr1.acctList[0].acctID).toBe(0);

	console.log('test account deletion');
	console.log('list length is ' + accountCtr1.acctList.length);

	accountCtr1.deleteAccount[0];
	console.log('new length is ' + accountCtr1.acctList.length);
	expect(accountCtr1.acctList.length).toBe(0);





});