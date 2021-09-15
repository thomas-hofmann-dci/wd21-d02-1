
// global const:
const MAX_DEFAULT = 10;

function numbersUpToMax(max) {
	if (max == undefined) {
		max = MAX_DEFAULT;
	}

	for (let i = 1;	i <= max; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	}
} 

numbersUpToMax();
const max = 6;
numbersUpToMax(max);
