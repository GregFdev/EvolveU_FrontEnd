import Node from './Node.js';


class LinkedList {
	constructor() {
		// set list to empty
		this.head = null;
		this.tail = null;
		this.current = null; // current node is null
		this.size = 0;
		
	}

			// insert Node after current node
	insertNode = (subject, amount) => {
		const node = new Node(subject, amount); // creates new node with data
		// this.current != null ? this.current.showNode() : null;

		// if list empty make head the new node
		if(this.head === null) {  // this.current will only be null if list is null
			this.head = node;
			this.tail = node;
			
		} else { // this case current cannot be null
				
				node.previous = this.current;
				node.next = this.current.next;
				this.current.next = node;
				
				if (node.next != null) {
					node.next.previous = node;
				} else {
					this.tail = node;
				};


				
								
		};
		this.current = node;
		// now add 1 to size
		this.size ++;

	}
	
	moveNext = () => {
		if(this.size <= 0) {
			console.log('no nodes exist');
			

		} else if (this.current.next === null) {
			console.log('currentNode is already at tail');
			
		} else {
			console.log('moved to right');
			this.current = this.current.next;
		}
	}


	movePrevious = () => {
		if(this.size <= 0) {
			console.log('no nodes exist');
			
		} else if (this.current.previous === null) {
			console.log('currentNode is already at head');
			
		} else {
			console.log('moved to left');
			this.current = this.current.previous;
			
		}
	}


	deleteNode = () => {  // delete the current node and return object that was deleted
		
		console.log('to delete is ', this.current.subject);

		if (this.current === null) { // array is empty, return nothing
			console.log('no nodes in list');
			

		} else if (this.size === 1 && this.head === this.tail) {  // only 1 node
			console.log('deleting only node in list');
			this.head = null;
			this.tail = null;
			this.current = null;
			this.size --;


		} else {  // two or more nodes
			console.log('delete from list with 2 or more');

			if (this.current === this.head) {  // at first node
				this.head = this.current.next;
				this.current.next.previous = this.current.previous;
				this.current = this.current.next;

			} else if (this.current === this.tail) {
				this.tail = this.current.previous;
				this.current.previous.next = this.current.next;
				this.current = this.current.previous;

			} else {
				console.log(`in between and size is ${this.size} and current is ${this.current.subject}`);
				console.log(`current.prev = ${this.current.previous.subject}`);
				this.current.next.previous = this.current.previous;
				this.current.previous.next = this.current.next;
				this.current = this.current.previous;
			}
			
			
			this.size --;
			

		};


			
	}

}


export default LinkedList;

