/*
	5. Рекурсия.
	
	Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.
	
	Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение.
	Потестируйте её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить?

	Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/ 
*/

function isEven(n) {
	
	if (n < 0) {
		n = -n;
	}
	
	switch (n) {
		case 0: return true;
		case 1: return false;
	}
	
	return (isEven(n-2));
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-108));