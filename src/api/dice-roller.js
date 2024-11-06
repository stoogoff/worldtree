
let token = null

export default ({ $axios }) => {
	return {
		async token() {
			const result = await $axios.$post('/api/access-token')
			console.log(result)
			token = result.accessToken
		},

		async roll(dice) {
			if(token === null) {
				await this.token()
			}

			await $axios.$get(`/api/dice-rolls/${ dice }/?acceasToken=${ token }&verbose=true`)
		},
	}
}
