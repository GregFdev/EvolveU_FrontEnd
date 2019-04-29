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

	

	// deleteNode = () => {  // delete the current node and return object that was deleted

	// 	if(this.position != null) {
	// 		let current = this.position;






	// 	}
	// 	if (index < 0 || index > (this.size - 1) {
	// 		console.log('index not valid');
	// 		return undefined;
	// 	} else {

	// 		let current = this.head;
	// 		let previous = null;
	// 		let i = 0;
			
	// 		if(index === 0) {
	// 			this.head = current.next

	// 		} else {

	// 			while(i < index) {
 // 				previous = current;
	// 			current = current.next;
	// 			i++;
				
	// 			};

	// 		}

			
	// 	}
			




	// 	} else {
	// 		console.log('not a valid index too small');
	// 		return undefined;
	// 	}
	// }

};


export default LinkedList;

