
const numbersBetweenMinAndMax = function(min, max) {
	let numbers = [];

	for (let i = min; i <= max; i++) {
		if (i % 2 == 0) {
			numbers.push(i);
		}
	}

	return numbers;
} 

let min = 1;
let max = 10;
let numbers = numbersBetweenMinAndMax(min, test);

console.log(numbers);
