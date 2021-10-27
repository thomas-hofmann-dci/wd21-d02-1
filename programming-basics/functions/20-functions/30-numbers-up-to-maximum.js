
function numbersUpToMax(maximum) {
	let numbers = [];

	for (let i = 1;	i <= maximum; i++) {
		if (i % 2 == 0) {
			numbers.push(i);
		}
	}

	return numbers;
} 

let max = 10;
let numbers = numbersUpToMax(max);

console.log(numbers);
