const showOutline = () => {
	[].forEach.call(document.querySelectorAll("*"), function(a) {a.style.outline = "1px solid #" + (~~(Math.random() * (1 << 24))).toString(16)})
}


const output = (log) => {
	console.log(log)
}


export { showOutline, output }