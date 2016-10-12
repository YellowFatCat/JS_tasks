/*
	2. FizzBuzz.
	
	Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. 
	Для чисел, нацело делящихся на 3, она должна выводить 'Fizz', а для чисел, делящихся на 5 (но не на 3) – 'Buzz'.
	Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.
	
	Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/ 
*/

for (var i = 1; i <= 100; i++) {
	
	var res = i + " ";
	
	if (i % 3 == 0) {
		res += "Fizz";
	}
	
	if (i % 5 == 0) {
		res += "Buzz";
	}
	
	console.log(res);
		
}
