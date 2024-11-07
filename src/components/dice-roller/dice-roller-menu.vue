<template>
	<div class="dice-roller-menu bg-wt-panel rounded-2xl border border-wt-outline-dark p-2 pb-2.5">
		<ul>
			<dice-icon dice="d20" />
			<dice-icon dice="d100" />
			<dice-icon dice="d10" />
			<dice-icon dice="d8" />
			<dice-icon dice="d6" />
			<dice-icon dice="d4" />
		</ul>
		<button-action @click="roll" :disabled="!canRoll">Roll</button-action>
	</div>
</template>
<script>

import Vue from 'vue'

export default Vue.component('DiceRollerMenu', {
	computed: {
		canRoll() {
			return this.$state.notation() !== ''
		},
	},

	methods: {
		async roll() {
			this.$emit('close')

			const notation = this.$state.notation()
			const result = await this.$diceRoll.roll(notation)

			this.$state.addOwnRoll(result)
		},
	},
})

</script>
<style scoped>

.dice-roller-menu {
	max-width: 120px;
}

</style>