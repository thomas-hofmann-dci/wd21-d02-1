
function numbersUpToMax(maximum) {
	//              ^
	// function parameters 
	
	for (let i = 1;	i <= maximum; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	}
} 

let maximum = 10;
//         a concrete value is provided to the function as ARGUMENT
numbersUpToMax(maximum);

maximum = 4;
numbersUpToMax(maximum);
