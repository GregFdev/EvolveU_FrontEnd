// import react from 'react';
import Account from './Account.js';

class AccountContr {

	constructor(){
		this.acctList = []
		this.acctID = 0;
		

	};

	addAccount (acctType, initBal) {
		this.acctID += 1;
		const newAccount = new Account(this.acctID, acctType, initBal);
		this.acctList.push(newAccount);
		
	};	

	findAccountIndex (acctID) {
		return (
			this.acctList.findIndex(accounts => {
				// console.log('acct to delete is ' + accounts.acctID);
				return (Number(accounts.acctID) === Number(acctID));
			})
		)
	};

	deleteAccount (acctID) {
		const delIndex = this.findAccountIndex(acctID);
		// console.log('index to delete is ' + delIndex);
		this.acctList.splice((delIndex), 1);
	};

	getAccountsTotal () {
		return (
			this.acctList.reduce((cumTot, account) => {
			// console.log('acct ID is ', account.acctID, 'cumTot is ', cumTot, 'account balance is ', account.balance);
			// console.log('data type is ', typeof cumTot);
			return Number(cumTot + account.balance);
			}, 0)
		);
	};

	getMaxAccount () {

		if(this.acctList.length > 0) {
			let tempMax = this.acctList[0].balance;
			let tempMaxID = this.acctList[0].acctID;
			this.acctList.forEach(acct => {

				if(acct.balance > tempMax) {

					tempMax = acct.balance;
					tempMaxID = acct.acctID;
				};
			
			});
		
			return tempMaxID;

		} else {return null};
		};

	getMinAccount () {
		
		if(this.acctList.length > 0) {

			let tempMin = this.acctList[0].balance;
			let tempMinID = this.acctList[0].acctID;
			this.acctList.forEach(acct => {

				if(acct.balance < tempMin) {
					tempMin = acct.balance;
					tempMinID = acct.acctID;
					// console.log(tempMinID);

				};
			});

			return tempMinID;

		} else {return null};
	};
};


export default AccountContr;