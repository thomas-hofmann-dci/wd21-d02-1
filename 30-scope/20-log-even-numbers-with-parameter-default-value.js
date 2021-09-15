
// parameter with default value
function numbersUpToMax(max=10) {

	for (let i = 1;	i <= max; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	}
} 

numbersUpToMax();
const max = 6;
numbersUpToMax(max);
