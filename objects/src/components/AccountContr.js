// import react from 'react';
import Account from './Account.js';

class AccountContr {

	constructor(){
		this.acctList = []
		this.acctID = 0;
		
	};

	addAccount (acctType, initBal=0) {
		this.acctID += 1;
		const newAccount = new Account(this.acctID, acctType, initBal);
		this.acctList.push(newAccount);
		
	};	

	findAccountIndex (acctID) {
		return (
			this.acctList.findIndex(accounts => {
				return (Number(accounts.acctID) === Number(acctID));
			})
		)
	};

	deleteAccount (acctID) {
		const delIndex = this.findAccountIndex(acctID);
		this.acctList.splice((delIndex), 1);
	};

	getAccountsTotal () {
		return (
			this.acctList.reduce((cumTot, account) => {
			return Number(cumTot + account.balance);
			}, 0)
		);
	};

	getMaxAccount () {

		if(this.acctList.length > 0) {
			
			const tempMaxID = this.acctList.reduce((prev, next) => 
				(prev.balance > next.balance ? prev : next));
			return tempMaxID.acctID;

		} else {return null};
	};

	getMinAccount () {
		
		if(this.acctList.length > 0) {
			
			const tempMinID = this.acctList.reduce((prev, next) => 
				(prev.balance < next.balance ? prev : next));
			return tempMinID.acctID;

		} else {return null};
	};
};


export default AccountContr;