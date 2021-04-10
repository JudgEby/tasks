// Дано число. Разложите его на простые множители.

const num = 12;

const getPrimeMultiplier = (num, firstItaration = true) => {
	let arrPM;
	firstItaration ? (arrPM = [1]) : (arrPM = []);

	for (let i = 2; i <= num; i++) {
		if (num % i === 0) {
			arrPM = [...arrPM, i, ...getPrimeMultiplier(num / i, false)];
			break;
		}
	}

	return arrPM;
};

console.log(getPrimeMultiplier(num));
