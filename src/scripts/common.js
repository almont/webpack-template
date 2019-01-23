const showOutline = () => {
	[].forEach.call(document.querySelectorAll('*'), function(a) {a.style.outline = '1px solid #' + (~~(Math.random() * (1 << 24))).toString(16)})
}


const log = (message, color = 'black') => {
	switch (color) {
		case 'success':
			color = 'Green'
			break
		case 'info':
			color = 'DodgerBlue'
			break
		case 'error':
			color = 'Red'
			break
		case 'warning':
			color = 'Orange'
			break
	}
	console.log('%c' + message, 'font-size:16px; font-weight:bold; color:' + color)
}


const randomNumber = (min, max, floor = true) => {
	const random = Math.random() * (max - min) + min
	if (floor) return Math.floor(random)
	return random
}


const randomColor = () => {
	const letters = '0123456789ABCDEF'
	let color = '#'
	for (let i = 0;i < 6;i++) color += letters[Math.floor(Math.random() * 16)]
	return color
}


export {showOutline, log, randomNumber, randomColor}