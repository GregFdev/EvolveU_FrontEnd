import {sum, diff, mult, quot} from "./math";

test('test the math functions', () => {
	
	expect(sum(1,2)).toBe(3);
	expect(diff(5,1)).toBe(4);
	expect(mult(5,2)).toBe(10);
	expect(quot(10,2)).toBe(5);
});

