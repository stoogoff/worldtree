
export const throttle = (callback, cutoff) => {
	let timer = null

	return function() {
		if(timer !== null) {
			window.clearTimeout(timer)
		}

		const that = this
		const args = arguments

		timer = window.setTimeout(function() {
			callback.apply(that, args)
		}, cutoff || 250)
	}
}
