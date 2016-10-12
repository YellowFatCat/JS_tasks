/*
	1. Треугольник.
	
	Напишите цикл, который выводит такой треугольник: 
	#
	##
	###
	####
	#####
	######
	#######
	
	Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/ 
*/

function triangle(n) {
	
	for (var i = 1; i <= n; i++) {
		
		var str = ""; // Текущая строка.
		
		for (var j = 1; j <= i; j++) {
			str += "#";
		}
		
		console.log(str);
		
	}
}

triangle(7);