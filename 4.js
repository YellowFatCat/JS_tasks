/*
	4. Минимум.
	
	Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
*/

function min(a, b) {
	if (a < b) {
		return a;
	}
	else {
		return b;
	}
}

console.log(min(0, 10));
console.log(min(0, -10));
