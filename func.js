const objProtect = (obj, fn) => ({ ...obj, ...fn(obj) })

function pipe(obj) {
	Object.freeze(obj)
	this.valueOf = () => obj
	this.pipe = (fn) => new pipe(objProtect(obj, fn))
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
