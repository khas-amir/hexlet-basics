import { l, map, reduce, toString } from './list.js';

const list = l(1, 2, 3, 4, 5);

const squares = map(v => v * v, list);

const sumOfSquares = reduce((acc, el) => acc + el, 0, squares);

console.log(`Sum${toString(squares)} = ${sumOfSquares}`);