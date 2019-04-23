//Account JS file for comp 140
// import react from 'react';

class Account {
	constructor(acctID, acctType, initBal) {
		this.acctID = acctID;
		this.acctType = acctType;
		this.balance = Number(initBal);
		
	};

	deposit = (depAmt) => {
		this.balance += depAmt;
	};

	withdrawal = (wdAmt) => {
		this.balance -= wdAmt;
	};

	typeChange = (newType) => {
		this.acctType = newType;
	};

};


export default Account;
