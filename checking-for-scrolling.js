//Дан элемент. Узнайте, есть ли в нем полоса прокрутки в данный момент или нет.

window.addEventListener('click', function (e) {
	e.stopImmediatePropagation();
	e.preventDefault();
	const c = console.log;
	e.target.scrollWidth > e.target.clientWidth
		? c('Горизонтальный скролл есть')
		: c('Горизонтального скролла нет');
	e.target.scrollHeight > e.target.clientHeight
		? c('Вертикальный скролл есть')
		: c('Вертикального скролла нет');
});
