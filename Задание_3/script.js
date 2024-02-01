let age = 18;
console.log(Number(age), Boolean(age), String(age));

console.log(+'50'); // неявное
console.log(Number('100')); // явное
console.log(Number(' ' + 1)); // неявное
console.log(String('100')); // явное
console.log(Boolean('0')); // неявное
console.log((+ '001')); // неявное
console.log((1 + '')); // неявное
console.log(Boolean(1)); // неявное
console.log(String(001)); // явное
console.log(Number('Hello World')); // неявное

console.log(String(console.log));
console.log(String({name: 'Maxim'}));
console.log(String(Symbol('key')));
console.log(String(Number));
console.log(String(""));
console.log(String(0));
console.log(String(-10));
console.log(String('-105'));

console.log(Number(' 1 2 3 4 5'));
// 1 2 3 4 5 ---
console.log(Number('1234 5'));
// 1234 5 ----
console.log(Number('12345'));
// 12345 +++
console.log(String(false));
//false +++
console.log(Boolean(00000000));
// error или undefined  -----
console.log(Boolean(0,0000000));
// error или undefined   -----
console.log(Number('1000f'));
// error или undefined   -+
console.log(Number('100'));
// 100  +
console.log(Number('000001'));
// 0,000001 ---


