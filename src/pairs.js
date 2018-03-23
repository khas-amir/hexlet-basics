
export const cons = (a, b) => f => f(a, b);

export const car = z => z((a, b) => a);

export const cdr = z => z((a, b) => b);
