
function sumFromMinToMax(min, max) {
	let sum = 0;

	for (let i=min; i<=max; i++) {
		sum += i;
	}

	return sum;
}


let min = 0;
let max = 3;

let sumA = sumFromMinToMax(min, max);
console.log(sumA);

/*
let sumB = sumFromMinToMax(-3,0);
console.log(sumB);
console.log(sumA + sumB);
/**/