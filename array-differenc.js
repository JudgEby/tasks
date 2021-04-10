//Сделайте функцию, которая будет принимать параметрами любое количество массивов и находить их разность, то есть
//возвращать массив элементов, которых нет одновременно во всех массивах.

const arr1 = [1, 2, 46, 8, 12];
const arr2 = [3, 5, 8, 1, 66];
const arr3 = [4, 2, 8, 1, 46, 66];

const getDiff = (...ars) => {
	const getUnic = (arr) => {
		return arr.filter((item, index, array) => {
			return (
				[...array.slice(0, index), ...array.slice(index + 1)].indexOf(item) ===
				-1
			);
		});
	};

	return [
		...new Set(
			ars.reduce((result, item, index, array) => {
				if (index !== 0) {
					return [...result, ...getUnic([...item, ...array[0]])];
				}
				return result;
			}, [])
		),
	];
};

console.log(getDiff(arr1, arr2, arr3));
