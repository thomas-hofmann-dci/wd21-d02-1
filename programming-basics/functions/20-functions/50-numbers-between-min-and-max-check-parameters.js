
function numbersBetweenMinAndMax(min, max) {
	if (min == undefined) {
		console.error("error: undefined parameter min")
		process.exit(1);
	}

	if (max == undefined) {
		console.error("error: undefined parameter max")
		process.exit(1);
	}

	let numbers = [];

	for (let i = min; i <= max; i++) {
		if (i % 2 == 0) {
			numbers.push(i);
		}
	}

	return numbers;
} 

let min = 1;
let test = 10;
let numbers = numbersBetweenMinAndMax(min, max);

console.log(numbers);
