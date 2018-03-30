import { l, head, tail, isEmpty, toString, reduce, reverse, map } from '../src/list.js';

test('Create list', () => {
    const list = l();
    expect(toString(list)).toBe('()');

    const list1 = l(1, 2, 'Hello', 'World');
    expect(toString(list1)).toBe('(1, 2, Hello, World)');
});

test('isEmpty', () => {
    const list = l();
    expect(isEmpty(list)).toBe(true);
    expect(isEmpty(l(1, 2, 3))).toBe(false);
});

test('Head and tail', () => {
    const list1 = l(1, 3, 4, 5);
    expect(head(list1)).toBe(1);
    expect(toString(tail(list1))).toBe('(3, 4, 5)');
    expect(toString(tail(l(1)))).toBe('()');
});

test('Reverse', () => {
    const list = l(1, 2, 4, 5);
    const result = reverse(list);
    expect(toString(result)).toBe('(5, 4, 2, 1)');
});

test('Map', () => {
    const list = l(1, 2, 3, 4);
    const result = map(v => v * 2, list);
    expect(toString(result)).toBe('(2, 4, 6, 8)');
});

test('Reduce', () => {
    const list = l(1, 2, 3, 4);
    const result = reduce((acc, el) => acc + el, 0, list);
    expect(result).toBe(10);
});