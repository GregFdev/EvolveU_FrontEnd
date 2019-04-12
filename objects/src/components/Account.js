//Account JS file for comp 140
import react from 'react';

class Account {
	constructor(acctType, initBal, userName, acctID){
		// super();
		this.acctID = acctID;
		this.userName = userName;
		this.acctType = acctType;
		this.balance = initBal;
		
	};

	deposit = (depAmt) => {
		this.balance += depAmt;
	};

	withdrawal = (wdAmt) => {
		this.balance -= wdAmt;
	}
};


export default Account;
