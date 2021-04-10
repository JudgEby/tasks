/* Пусть у нас есть дата 22.02.2017. В этой дате 4 двойки.
Найдите все даты с 4-мя двойками в текущем столетии. */

const getRepeating = (startYear, lastYear, searchedNum, numOfRepeating) => {
	let result = [];

	for (i = 1; i > 0; i++) {
		const date = new Date(startYear, 0, i);

		if (date.getFullYear() === lastYear + 1) {
			break;
		}

		const arrFromDate = [
			date.getFullYear(),
			date.getMonth() + 1,
			date.getDate(),
		];
		const repeatCountArr = arrFromDate
			.join('')
			.split('')
			.filter((item) => +item === searchedNum);
		if (repeatCountArr.length === numOfRepeating) {
			result = [...result, arrFromDate.join('-')];
		}
	}
	return result;
};

console.log(getRepeating(2001, 2101, 2, 4));
