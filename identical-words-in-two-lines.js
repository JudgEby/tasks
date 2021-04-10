/* Даны две строки со словами (без знаков препинаний). Выведите на экран те слова, которые встречаются и в одной, и во второй строке. */

const stringFirst = 'a b c d a b x';
const stringSecond = 'x b v a';

const matches = (str1, str2) => {
	let arrOfStr2 = str2.split(' ');
	return str1
		.split(' ')
		.filter(
			(el1, idx, arr) =>
				arrOfStr2.some((el2) => el1 === el2) && arr.indexOf(el1) === idx
		)
		.join(', ');
};

console.log(matches(stringFirst, stringSecond));
