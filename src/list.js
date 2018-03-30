import { cons, car, cdr } from './pairs.js';

const l = (...rest) => rest.reverse().reduce((acc, el) => cons(el, acc), null);
const head = list => car(list);
const tail = list => cdr(list);
const isEmpty = list => list === null;

const reverse = list => {
  const iter = (acc, count) => {
    if (isEmpty(count)) {
      return acc;
    }
    return iter(cons(head(count), acc), tail(count));
  };
  return iter(l(), list);
};

const reduce = (fn, acc, list) => {
  const iter = (iAcc, count) => {
    if (isEmpty(count)) {
      return iAcc;
    }
    return iter(fn(iAcc, head(count)), tail(count));
  };
  return iter(acc, list);
};

const map = (fn, list) => {
  const iter = (acc, count) => {
    if (isEmpty(count)) {
      return acc;
    }
    return iter(cons(fn(head(count)), acc), tail(count));
  };
  return reverse(iter(l(), list));
};

const toString = list =>
  "(" + reduce((acc, el) => [...acc, el], [], list).join(", ") + ")";

  export {l, head, tail, isEmpty, toString, map, reverse, reduce};