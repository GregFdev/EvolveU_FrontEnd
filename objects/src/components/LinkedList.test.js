import LinkedList from './LinkedList.js';

test('test LinkedList instantiation', () => {
	const linkedList = new LinkedList();

	linkedList.insertNode('Ham', 1000);
	linkedList.insertNode('Fish', 5000);
	linkedList.insertNode('Eggs', 2000);
	linkedList.insertNode('Treats', 10000);

	console.log('currentnode is ', linkedList.position.subject);

	// console.log('length is ' + linkedList.size);

	// linkedList.insertNode('pears', 20);
	expect(linkedList.size).toBe(4);
	
	let deleted = linkedList.deleteNode();
	console.log('deleted node is ', deleted.subject); // delete the current node

	expect(linkedList.size).toBe(3);


	linkedList.moveNext();


});