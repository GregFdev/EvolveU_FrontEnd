import react from 'react';
import Account from './Account.js';

class AccountContr {
	constructor(){
		this.acctList = [];
		this.acctID = 0;

	};

	addAccount = (acctType, initBal, userName) => {
		const newAccount = new Account(acctType, initBal, userName, this.acctID);
		this.acctList.push(newAccount);
		this.acctID += 1;
	};	

	deleteAccount = (acctID) => {
		this.acctList.splice(acctID, 1);
	};

	getAccountsTotal = () => {
		return(
			this.acctList.reduce((cumTot, account) => {
				// console.log('total is ' + (cumTot + account.balance));
				return cumTot + account.balance;
			}, 0)
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
				console.log(tempMinID);

			} else {console.log('bal > tempMin')};
		});

		return tempMinID;
	};
};


export default AccountContr;