import Node from './Node.js';


class LinkedList {
	constructor() {
		// set list to empty
		this.head = null;
		this.tail = null;
		this.position = null; // current node is null
		this.size = 0;
		

	};

	
	// insert Node after current node
	insertNode = (subject, amount) => {
		const node = new Node(subject, amount); // creates new node with data
		// this.position != null ? this.position.showNode() : null;

		// if list empty make head the new node
		if(this.head === null) {
			this.head = node;
			this.tail = node;
			this.position = node;

		} else { // if not empty make head the new node
				// let current = this.position;
				
				node.previous = this.position;
				node.next = this.position.next;
				// console.log('new node is ');
				// node.showNode();
				// console.log('current.next node is ');
				this.position.next = node;
				if (node.next != null) {
					node.next.previous = node;
				};

				

				this.position = node;
								
		};

		// now add 1 to size
		this.size ++;

	};

	

	deleteNode = () => {  // delete the current node and return object that was deleted
		let current = this.position;
		console.log('to delete is ', current.subject);

		if(current === null) { // array is empty, return nothing
			console.log('current is empty');
			return null;


		} else {	
			console.log('position to delete is ', current.subject);
			(current === this.head) ? this.head = current.next : null;
			(current === this.tail) ? this.tail = current.previous : null;
			current.next ? current.next.previous = current.previous : null;
			current.previous ? current.previous.next = current.next: null;

			this.position = current.previous;
			this.size --;
			return current;


		};


			
	};


	moveNext = () => {
		if(this.size <= 0) {
			return null;;

		} else if (this.position === null) {
			return null;

		} else {
			this.position = this.position.next;
			console.log('new pos is ', this.position);
			return this.position;
		};
	};



};


export default LinkedList;

