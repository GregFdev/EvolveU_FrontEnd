//Account JS file for comp 140
// import react from 'react';

class Account {
	constructor(acctType, initBal, acctID){
		// super();
		this.acctID = acctID;
		this.acctType = acctType;
		this.balance = Number(initBal);
		
	};

	deposit = (depAmt) => {
		this.balance += depAmt;
	};

	withdrawal = (wdAmt) => {
		this.balance -= wdAmt;
	}
};


export default Account;
