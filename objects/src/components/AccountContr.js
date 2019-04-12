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
	}

	// deleteAccount = ()
};


export default AccountContr;