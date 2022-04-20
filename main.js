let ratings = document.querySelectorAll('.feedback__num');
let btnSubmit = document.querySelector('.feedback__button');

function makeActive(elems) {
	for (let elem of elems) {
		elem.addEventListener('click', function () {
			if (document.querySelector('.active')) {
				document.querySelector('.active').classList.remove('active');
			}
			elem.classList.add('active');
		})
	}
}
makeActive(ratings);

btnSubmit.addEventListener('click', function () {
	if (document.querySelector('.active')) {
		let rating = document.querySelector('.active');
		let result = document.querySelector('.gratitude__result');
		result.textContent += 
		rating.textContent + ' out of ' + ratings[ratings.length-1].textContent;

		document.querySelector('.flipper').classList.add('sent');
	}
})
