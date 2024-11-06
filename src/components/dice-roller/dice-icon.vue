<template>
	<li class="pl-2.5 py-2 flex gap-2 cursor-pointer" @click="incrementDice">
		<icon-view :icon="dice" class="text-white" />
		<span class="mt-0.5">{{ label }}</span>
	</li>	
</template>
<script>

import Vue from 'vue'

export default Vue.component('DiceIcon', {
	props: {
		number: {
			type: Number,
			default: 0,
		},
		dice: {
			type: String,
			required: true,
		},
	},

	computed: {
		label() {
			return (this.number === 0 ? '–' : this.number) + this.dice
		},
	},

	methods: {
		incrementDice() {
			this.$emit('click', this.dice)
		},
	},
})

</script>