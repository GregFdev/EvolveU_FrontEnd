// import react from 'react';
import Account from './Account.js';

class AccountContr {
	constructor(){
		this.acctList = [];
		this.acctID = 1;

	};

	addAccount (acctType, initBal) {
		const newAccount = new Account(acctType, initBal, this.acctID);
		this.acctList.push(newAccount);
		this.acctID += 1;
	};	

	deleteAccount = (acctID) => {
		const delIndex = this.acctList.findIndex(accounts => {
			// console.log('acct to delete is ' + accounts.acctID);
			return accounts.acctID === acctID;
		});
		// console.log('index to delete is ' + delIndex);
		this.acctList.splice((delIndex), 1);
	};

	getAccountsTotal = () => {
		return (
			Number(
				this.acctList.reduce((cumTot, account) => {
								// console.log('total is ' + (cumTot + account.balance));
								return cumTot + account.balance;
							}, 0)


				)
			
		);
	};

	getMaxAccount = () => {
		let tempMax = this.acctList[0].balance;
		let tempMaxID = this.acctList[0].acctID;

		this.acctList.forEach(acct => {

			if(acct.balance > tempMax) {

				tempMax = acct.balance;
				tempMaxID = acct.acctID;
			};
		
		});
	
		return tempMaxID;
		};

	getMinAccount = () => {
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
	};
};


export default AccountContr;