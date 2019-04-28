import Node from './Node.js';


class LinkedList {
	constructor() {
		// set list to empty
		this.head = null;
		this.size = 0;
		this.currIndex = null // position in list starting at 0
		

	};

	getCurrIndex = () => {
		console.log(`Current index is ${this.currIndex}`);
	};

	// insert Node after current node
	insertNode = (subject, amount) => {
		const node = new Node(subject, amount); // creates new node with data
		let current; 	// to store the current node

		// if list empty make head the new node
		if(this.head === null) {
			this.head = node;
		} else { // if not empty make head the current node
				current = this.head;

				// now iterate to end of list through each existing node
				while(current.next != null) {
					current = current.next; // set current to next node if next node exists

				};

				// when next node is empty, add node there
				current.next = node;

		};

		// now add 1 to size
		this.size ++;

	};

	getNode = (index) => {
		if (index > -1) {
			// console.log(`getting index ${index}`)
			let current = this.head;
			let i = 0;

			// iterate through list until end or reach desired index
			while((current.next != null) && (i < index)) {
				// console.log(`current index in while is ${i}`);
				current = current.next;
				i++;

			}
			return (current !== null ? current.subject : undefined);

		} else {
			return undefined;
		}
	}

};


export default LinkedList;

