
let token = null

export default ({ $axios }) => {
	return {
		async token() {
			const result = await $axios.$post('/api/access-token')

			token = result.accessToken
		},

		async roll(dice) {
			if(token === null) {
				await this.token()
			}

			// TODO handle token expiry correctly
			try {
				return await $axios.$get(`/api/dice-rolls/${ dice }/?accessToken=${ token }&verbose=true`)
			}
			catch {
				token = null
				return await this.roll(dice)
			}
		},
	}
}
