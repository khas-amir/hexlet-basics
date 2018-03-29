import {cons, car, cdr} from '../src/pairs.js';

test('set #1', () => {
    const pair = cons(1, 2);
    expect(car(pair)).toBe(1);
});

test('set #2', () => {
    const pair = cons(1, cons(3, 4));
    expect(car(cdr(pair))).toBe(3);
});
