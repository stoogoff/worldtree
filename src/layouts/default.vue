<template>
	<div class="h-full">
		<app-nav />
		<div class="container mx-auto h-full">
			<Nuxt />
		</div>
	</div>
</template>
<script>

export default {
	name: 'DefaultLayout',

	data() {
		return {
			socket: null,
		}
	},

	mounted() {
		this.socket = this.$nuxtSocket({})

		this.socket.on('diceRoll', (msg, cb) => {
			console.log(msg, cb)
			this.$state.addGuestRoll(msg)
		})
	},
}

</script>
<style scoped>

.container {
	max-width: 752px;
}

</style>