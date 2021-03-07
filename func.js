
function objCopyEditReturn(obj, fn) {
	const copy = { ...obj }
	fn(copy)
	return copy
}

function Pipe(obj) {
	this.valueOf = () => obj
	this.pipe = (fn) => new Pipe(objCopyEditReturn(obj, fn))
}

export const piping = obj => new Pipe(obj)

export const recursion = func => (...variables) => {
	try {
		while (true)
			variables = func(...variables)
	} catch (returnData) {
		return returnData
	}
}
