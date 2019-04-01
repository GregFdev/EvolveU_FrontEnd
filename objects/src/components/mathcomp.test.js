// import React from 'react';
// import ReactDOM from 'react-dom';
import MathComp from './MathComp.js'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<MathComp />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('Test the math functions', () => {
	console.log('Hello World');
	expect(MathComp.multiply(6,2)).toBe(18);
});