/*
	6. Считаем бобы.
	
	Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.
	Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке 
	(вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.

	Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/ 
*/

function countBs(str) {
	var res = 0;
	for (var i = 0; i < str.length; i++) {

		if (str.charAt(i).toUpperCase() === "B") {
			res++;
		}
	}
	return res;
}

console.log(countBs("Bob's burgers"));

function countChar(str, ch) {
	var res = 0;
	for (var i = 0; i < str.length; i++) {

		if (str.charAt(i).toUpperCase() === ch.toUpperCase()) {
			res++;
		}
	}
	return res;
}

console.log(countChar("How many cookies could a good cook cook if a good cook could cook cookies?", "c"));