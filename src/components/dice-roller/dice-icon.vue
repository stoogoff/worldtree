<template>
	<li class="pl-2.5 py-2 flex gap-2 cursor-pointer" @click="incrementDice">
		<icon-view :icon="dice" :class="{
			'text-white': !isSelected,
			'text-wt-primary': isSelected, }" />
		<span class="mt-0.5" :class="{ 'text-white': isSelected }">{{ label }}</span>
	</li>	
</template>
<script>

import Vue from 'vue'

export default Vue.component('DiceIcon', {
	props: {
		dice: {
			type: String,
			required: true,
		},
	},

	computed: {
		count() {
			const current = this.$state.dice().find(({ type }) => type === this.dice)

			return current ? current.count : 0
		},

		label() {
			return (this.count === 0 ? '–' : this.count) + this.dice
		},

		isSelected() {
			return this.count > 0
		}
	},

	methods: {
		incrementDice() {
			this.$state.addDice(this.dice, this.count + 1)
		},
	},
})

</script>