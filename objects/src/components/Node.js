

class Node {
	constructor(subject, amount) {
		this.subject = subject;
		this.amount = amount;
		this.next = null;
		this.previous = null;
		

	};

	showNode = () => {
		console.log(`Node subject is ${this.subject} and amount is ${this.amount}`);
	};


};

export default Node;
