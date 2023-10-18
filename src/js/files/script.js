// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів

const anchors = document.querySelectorAll('.link')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const blockID = anchor.getAttribute('href').substr(1)
		if (anchor.closest('.menu-open')) {
			anchor.closest('.menu-open').classList.remove('menu-open', 'lock')
		}

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
}
