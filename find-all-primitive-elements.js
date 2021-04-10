/* Дан многомерный массив произвольного уровня вложенности. Просмотрите все уровни вложенности и найдите все элементы-массивы, содержащие только элементы-примитивы. */

const getOnlyWithPrimitives = (arr) => {
	let result = [],
		isPrimesInside = true;

	arr.forEach((item) => {
		if (typeof item === 'object') {
			isPrimesInside = false;
			result = [...result, [...getOnlyWithPrimitives(item).flat(Infinity)]];
		}
	});

	return isPrimesInside ? arr : result;
};

console.log(getOnlyWithPrimitives([1, [34, true], [3, [5, 7]]]));
