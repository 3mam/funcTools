function objCopyEditReturn(obj, fn) {
	if (typeof obj === 'object') {
		const copy = { ...obj }
		fn(copy)
		return copy
	}
	return fn(obj)
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
