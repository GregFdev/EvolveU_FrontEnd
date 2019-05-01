import LinkedList from './LinkedList.js';

test('test LinkedList instantiation', () => {
	const linkedList = new LinkedList();

	expect(linkedList.size).toBe(0);
	expect(linkedList.tail).toBe(null);

	linkedList.insertNode('Ham', 1000);
	expect(linkedList.current.subject).toBe('Ham');
	expect(linkedList.tail.subject).toBe('Ham');

	linkedList.insertNode('Fish', 5000);
	linkedList.insertNode('Eggs', 2000);
	linkedList.insertNode('Treats', 10000);

	expect(linkedList.size).toBe(4);
	expect(linkedList.tail.subject).toBe('Treats');
			
	linkedList.current = linkedList.head; // move current to head

	linkedList.insertNode('Apples', 4);
	expect(linkedList.size).toBe(5);
	expect(linkedList.current.subject).toBe('Apples');
	expect(linkedList.current.next.subject).toBe('Fish');
	
	linkedList.current = linkedList.head;

	expect(linkedList.current.subject).toBe('Ham');
	// console.log('first move next');
	linkedList.moveNext();
	expect(linkedList.current.subject).toBe('Apples');
	linkedList.moveNext();
	linkedList.moveNext();
	linkedList.moveNext();
	expect(linkedList.current.subject).toBe('Treats');

	linkedList.current = linkedList.tail;
	expect(linkedList.current.subject).toBe('Treats');

	linkedList.movePrevious();
	linkedList.movePrevious();
	linkedList.movePrevious();
	linkedList.movePrevious();

	expect(linkedList.current.subject).toBe('Ham');

	linkedList.moveNext();
	expect(linkedList.current.subject).toBe('Apples');

	// console.log(`Node to delete is ${linkedList.current.subject}`);
	linkedList.deleteNode();

	expect(linkedList.current.subject).toBe('Ham');
	linkedList.deleteNode();
	expect(linkedList.current.subject).toBe('Fish');

	linkedList.moveNext();
	linkedList.moveNext();

	expect(linkedList.current.subject).toBe('Treats');
	linkedList.deleteNode();
	expect(linkedList.current.subject).toBe('Eggs');

	// end of delete testing.  Start first and last testing

	linkedList.insertNode('Perogi', 5);
	linkedList.insertNode('Wood', 2);

	console.log('array is', linkedList.logList());

	expect(linkedList.current.subject).toBe('Wood');
	linkedList.moveFirst();
	expect(linkedList.current.subject).toBe('Fish');

	linkedList.moveLast();
	expect(linkedList.current.subject).toBe('Wood');
	
	expect(linkedList.totalAmount()).toBe(7007);



	// console.log('next move next');
	// linkedList.moveNext();

	// let deleted = linkedList.deleteNode();
	// console.log('deleted node is ', deleted.subject); // delete the current node

	// expect(linkedList.size).toBe(3);

});