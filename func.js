
function objCopyEditReturn(obj, fn) {
	const copy = { ...obj }
	fn(copy)
	return copy
}

function pipe(obj) {
	this.valueOf = () => obj
	this.pipe = (fn) => new pipe(objCopyEditReturn(obj, fn))
}

export const piping = obj => new pipe(obj)

export const recursion = func => (...variables) => {
	try {
		while (true)
			variables = func(...variables)
	} catch (returnData) {
		return returnData
	}
}
