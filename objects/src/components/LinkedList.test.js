import LinkedList from './LinkedList.js';

test('test LinkedList instantiation', () => {
	const linkedList = new LinkedList();

	linkedList.insertNode('Ham', 1000);
	linkedList.insertNode('Fish', 5000);
	linkedList.insertNode('Eggs', 2000);
	linkedList.insertNode('Treats', 10000);

	console.log('currentnode is ', linkedList.position);

	// console.log('length is ' + linkedList.size);

	// linkedList.insertNode('pears', 20);
	expect(linkedList.size).toBe(1);
	// console.log('length is ' + linkedList.size);

	

	// linkedList.deleteNode(); // delete the current node





});