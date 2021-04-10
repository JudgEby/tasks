//Дан текст. Сделайте в нем все маленькие буквы большими и наоборот.

const str = 'LoRem iPsum DoloR siT aMet coNseCtetUr adipiSiCing ElIt.';

const invertStr = (str) => {
	return [...str].reduce(
		(result, symbol) =>
			symbol.toUpperCase() === symbol
				? `${result}${symbol.toLowerCase()}`
				: `${result}${symbol.toUpperCase()}`,
		''
	);
};

console.log(invertStr(str));
