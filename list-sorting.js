/* Дан список ul, например, вот такой:

<ul>
<li>5</li>
<li>2</li>
<li>7</li>
<li>9</li>
<li>1</li>
<li>3</li>
<li>8</li>
<li>4</li>
<li>6</li>
</ul>
<button>sort</button>

Сделайте так, чтобы по нажатию на кнопку выполнилась сортировка пунктов списка по возрастанию значений тегов li. */

const ul = document.querySelector('ul');
const sortButton = document.querySelector('button');

sortButton.addEventListener('click', () => onButtonClick(ul));

function onButtonClick(parentElem) {
	[...parentElem.children]
		.sort((a, b) => a.innerHTML - b.innerHTML)
		.forEach((item) => parentElem.append(item));
}
