// Дан массив. Найдите второй по величине элемент, после максимального.

const arr = [1, 2, 3, 4, 5, 5];

const getPreMaxNum = (arr) => {
	const maxNum = Math.max(...arr);
	arr = arr.filter((item) => item !== maxNum);
	return Math.max(...arr);
};

console.log(getPreMaxNum(arr));
