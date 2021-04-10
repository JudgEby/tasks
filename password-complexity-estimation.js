/* Дана строка с паролем. Напишите скрипт, который будет оценивать сложность этого пароля. Критерии сложности придумайте самостоятельно и опишите их в вашем решении. */

const password = 'ab%Gl56';

const getDifficultyLevel = (pass) => {
	let difficulty = 0;

	// количество знаков от 6 до 10 даёт 1 к сложности, более 10 знаков - 2 к сложности
	if (pass.length > 6 && pass.length <= 10) difficulty++;
	if (pass.length > 10) difficulty += 2;

	// по 1 к сложности за использование заглавных букв, цифр и символов
	if (/[A-Z]/.test(pass)) difficulty++;
	if (/[0-9]/.test(pass)) difficulty++;
	if (/[!@#\$&\*%\?\._]/.test(pass)) difficulty++;

	return difficulty;
};

console.log(getDifficultyLevel(password));
